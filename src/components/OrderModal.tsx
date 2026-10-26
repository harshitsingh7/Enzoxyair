import React, { useState } from 'react';
import { X, Check, ShieldCheck, ArrowRight, RotateCcw, Truck, MessageCircle, QrCode } from 'lucide-react';
import { PRODUCT_DATA, SITE_INFO } from '../data/siteData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductType?: 'device' | 'filter';
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialProductType = 'device'
}) => {
  const [productType, setProductType] = useState<'device' | 'filter'>(initialProductType);
  const [quantity, setQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');
  const [step, setStep] = useState<'form' | 'upi' | 'success'>('form');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    notes: ''
  });

  if (!isOpen) return null;

  const unitPrice = productType === 'device' ? PRODUCT_DATA.price : PRODUCT_DATA.filterPack.price;
  const mrp = productType === 'device' ? PRODUCT_DATA.mrp : PRODUCT_DATA.filterPack.mrp;
  const productName = productType === 'device' ? PRODUCT_DATA.title : PRODUCT_DATA.filterPack.name;
  
  const subtotal = unitPrice * quantity;
  const total = Math.max(0, subtotal - appliedDiscount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'CLEANAIR' || code === 'ENZOXY500') {
      setAppliedDiscount(500);
      setCouponMessage('Coupon applied! ₹500 discount on your order.');
    } else if (code === 'WELCOME') {
      setAppliedDiscount(300);
      setCouponMessage('Welcome offer applied! ₹300 discount.');
    } else {
      setAppliedDiscount(0);
      setCouponMessage('Invalid coupon code. Try CLEANAIR.');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.city || !formData.pincode) {
      alert('Please fill out all required address fields.');
      return;
    }
    setStep('upi');
  };

  // UPI payment payload
  const upiId = 'enzoxyair@icici'; // Official company UPI VPA
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(SITE_INFO.legalName)}&am=${total.toFixed(2)}&cu=INR&tn=ENZOXY-${Date.now().toString().slice(-6)}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=${encodeURIComponent(upiUrl)}`;

  const handleConfirmPayment = () => {
    setStep('success');
  };

  const resetAndClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-[rgba(11,25,25,0.08)] shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[rgba(11,25,25,0.08)] bg-[#f8faf9]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00B894]" />
            <h3 className="font-headline text-lg sm:text-xl font-bold tracking-[0.08em] uppercase text-[#0B1919]">
              {step === 'form' && 'Order Checkout'}
              {step === 'upi' && 'Scan & Pay via UPI'}
              {step === 'success' && 'Order Confirmed'}
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="w-9 h-9 rounded-full bg-white border border-[rgba(11,25,25,0.12)] flex items-center justify-center text-[#424848] hover:text-[#0B1919] hover:bg-[#E8EDED] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Step 1: Form & Product Selection */}
        {step === 'form' && (
          <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Product Switcher */}
            <div>
              <p className="text-[11px] font-headline uppercase font-semibold tracking-[0.16em] text-[#737878] mb-3">
                Select Item
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setProductType('device')}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    productType === 'device'
                      ? 'border-[#006b56] bg-[#f2f4f3] shadow-sm'
                      : 'border-[rgba(11,25,25,0.08)] bg-white hover:border-[#737878]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-headline font-bold text-sm uppercase text-[#0B1919]">
                      AP-200-H3 Smart Purifier
                    </span>
                    {productType === 'device' && (
                      <span className="w-4 h-4 rounded-full bg-[#006b56] text-white flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#737878] line-clamp-1 mb-2">
                    Medical H13 HEPA · Laser PM2.5 · Wi-Fi
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline font-bold text-lg text-[#0B1919]">
                      ₹{PRODUCT_DATA.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs line-through text-[#737878]">
                      ₹{PRODUCT_DATA.mrp.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] font-semibold text-[#006b56] uppercase">
                      39% OFF
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setProductType('filter')}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    productType === 'filter'
                      ? 'border-[#006b56] bg-[#f2f4f3] shadow-sm'
                      : 'border-[rgba(11,25,25,0.08)] bg-white hover:border-[#737878]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-headline font-bold text-sm uppercase text-[#0B1919]">
                      Replacement Filter Pack
                    </span>
                    {productType === 'filter' && (
                      <span className="w-4 h-4 rounded-full bg-[#006b56] text-white flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#737878] line-clamp-1 mb-2">
                    3-in-1 Pre-Filter + H13 + Carbon
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline font-bold text-lg text-[#0B1919]">
                      ₹{PRODUCT_DATA.filterPack.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs line-through text-[#737878]">
                      ₹{PRODUCT_DATA.filterPack.mrp.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] font-semibold text-[#006b56] uppercase">
                      35% OFF
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#f8faf9] border border-[rgba(11,25,25,0.06)]">
              <div>
                <p className="font-headline font-bold text-sm text-[#0B1919] uppercase">Quantity</p>
                <p className="text-xs text-[#737878]">Free shipping nationwide included</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full border border-[rgba(11,25,25,0.15)] bg-white text-base font-bold flex items-center justify-center hover:bg-[#E8EDED]"
                >
                  -
                </button>
                <span className="font-headline font-bold text-lg w-6 text-center text-[#0B1919]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full border border-[rgba(11,25,25,0.15)] bg-white text-base font-bold flex items-center justify-center hover:bg-[#E8EDED]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Coupon Code Section */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon Code (e.g. CLEANAIR)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-full border border-[rgba(11,25,25,0.15)] text-xs uppercase tracking-wider font-headline focus:outline-none focus:border-[#006b56]"
              />
              <button
                type="submit"
                className="btn-ghost text-xs py-2 px-5"
              >
                Apply
              </button>
            </form>
            {couponMessage && (
              <p className={`text-xs ${appliedDiscount > 0 ? 'text-[#006b56]' : 'text-rose-600'}`}>
                {couponMessage}
              </p>
            )}

            {/* Delivery Address Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4 pt-4 border-t border-[rgba(11,25,25,0.08)]">
              <p className="text-[11px] font-headline uppercase font-semibold tracking-[0.16em] text-[#737878]">
                Shipping & Delivery Details
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-headline uppercase font-medium text-[#424848] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[rgba(11,25,25,0.15)] text-sm focus:outline-none focus:border-[#006b56]"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-headline uppercase font-medium text-[#424848] mb-1">
                    Contact Phone (with WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[rgba(11,25,25,0.15)] text-sm focus:outline-none focus:border-[#006b56]"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-headline uppercase font-medium text-[#424848] mb-1">
                  Email Address (for invoice & warranty registration) *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[rgba(11,25,25,0.15)] text-sm focus:outline-none focus:border-[#006b56]"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-[11px] font-headline uppercase font-medium text-[#424848] mb-1">
                  Delivery Address *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[rgba(11,25,25,0.15)] text-sm focus:outline-none focus:border-[#006b56]"
                  placeholder="Flat/House no., building, street, landmark"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-headline uppercase font-medium text-[#424848] mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[rgba(11,25,25,0.15)] text-sm focus:outline-none focus:border-[#006b56]"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-headline uppercase font-medium text-[#424848] mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[rgba(11,25,25,0.15)] text-sm focus:outline-none focus:border-[#006b56]"
                    placeholder="State"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-headline uppercase font-medium text-[#424848] mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[rgba(11,25,25,0.15)] text-sm focus:outline-none focus:border-[#006b56]"
                    placeholder="6 digits"
                  />
                </div>
              </div>

              {/* Order Summary & Submit */}
              <div className="pt-4 border-t border-[rgba(11,25,25,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#737878] block">Total Amount to Pay:</span>
                  <span className="font-headline font-bold text-2xl text-[#0B1919]">
                    ₹{total.toLocaleString('en-IN')}
                  </span>
                  {appliedDiscount > 0 && (
                    <span className="text-[11px] text-[#006b56] font-medium block">
                      Includes ₹{appliedDiscount} coupon discount
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-accent w-full sm:w-auto text-xs py-3.5 px-8"
                >
                  Proceed to UPI Payment
                  <ArrowRight size={15} />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 2: Live UPI Payment */}
        {step === 'upi' && (
          <div className="p-6 sm:p-10 space-y-6 text-center max-h-[80vh] overflow-y-auto">
            <div className="max-w-md mx-auto space-y-4">
              <span className="text-[10px] font-headline uppercase font-semibold tracking-[0.24em] text-[#006b56] px-3 py-1 rounded-full bg-[#f2f4f3] border border-[#51f9d0]">
                Official Payment QR
              </span>

              <h4 className="font-headline text-2xl font-bold uppercase tracking-wide text-[#0B1919]">
                Scan with any UPI App
              </h4>
              <p className="text-xs text-[#737878]">
                Google Pay, PhonePe, Paytm, BHIM, CRED or your bank app
              </p>

              {/* QR Code Container */}
              <div className="p-4 bg-white rounded-3xl border border-[rgba(11,25,25,0.1)] inline-block shadow-lg">
                <img
                  src={qrCodeUrl}
                  alt="UPI Payment QR Code"
                  className="w-56 h-56 mx-auto object-contain rounded-xl"
                />
                <div className="mt-3 pt-3 border-t border-[rgba(11,25,25,0.08)]">
                  <p className="text-[11px] font-headline uppercase tracking-wider text-[#737878]">
                    Payee: <strong className="text-[#0B1919]">{SITE_INFO.legalName}</strong>
                  </p>
                  <p className="font-headline font-bold text-xl text-[#006b56] mt-1">
                    ₹{total.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleConfirmPayment}
                  className="btn-primary w-full text-xs py-3.5"
                >
                  I Have Completed Payment
                </button>

                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setStep('form')}
                    className="text-xs font-headline uppercase tracking-wider text-[#737878] hover:text-[#0B1919]"
                  >
                    ← Edit Address
                  </button>

                  <a
                    href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(`Hi ENZOXY team, I am placing an order for ${quantity}x ${productName} (Total: ₹${total}). My name is ${formData.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-headline uppercase tracking-wider text-[#006b56] hover:underline"
                  >
                    <MessageCircle size={14} />
                    <span>Confirm on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#f8faf9] text-[11px] text-[#737878] flex items-center justify-center gap-2">
                <ShieldCheck size={14} className="text-[#006b56]" />
                <span>100% Secure Transaction with 12 Months Warranty</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Success Confirmation */}
        {step === 'success' && (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#006b56] text-white flex items-center justify-center mx-auto shadow-lg">
              <Check size={32} strokeWidth={2.5} />
            </div>

            <div>
              <h4 className="font-headline text-3xl font-bold uppercase tracking-tight text-[#0B1919]">
                Order Received!
              </h4>
              <p className="text-sm text-[#737878] max-w-md mx-auto mt-2 leading-relaxed">
                Thank you for choosing ENZOXY AIR. We have received your order details for <strong>{quantity}x {productName}</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#f8faf9] border border-[rgba(11,25,25,0.08)] max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#737878]">Delivery To:</span>
                <span className="font-semibold text-[#0B1919]">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#737878]">Destination:</span>
                <span className="font-semibold text-[#0B1919]">{formData.city}, {formData.pincode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#737878]">Total Amount:</span>
                <span className="font-semibold text-[#006b56]">₹{total.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#737878]">Dispatch ETA:</span>
                <span className="font-semibold text-[#0B1919]">1–2 Business Days</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(`Hi ENZOXY support, I have placed order for ${quantity}x ${productName} (₹${total}) for ${formData.name}. Please confirm dispatch tracking.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-xs py-3 px-6 w-full sm:w-auto"
              >
                <MessageCircle size={15} />
                <span>Track on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={resetAndClose}
                className="btn-ghost text-xs py-3 px-6 w-full sm:w-auto"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
