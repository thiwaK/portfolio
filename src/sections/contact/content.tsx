"use client";

import React, { useState, useRef, MouseEvent } from "react";
import { BiMailSend } from "react-icons/bi";

export default function ContactContent() {
  // Form state
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Radar/GIS coordinate simulation state
  const [coords, setCoords] = useState({
    lat: 7.0873,
    lng: 79.9980,
    distance: 0,
    active: false,
    x: 50,
    y: 50
  });

  const radarRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!radarRef.current) return;
    const rect = radarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const pctX = (x / rect.width) * 100;
    const pctY = (y / rect.height) * 100;

    // Simulate coordinates mapping Gampaha, Sri Lanka (7.0873° N, 79.9980° E)
    // Scale changes around ~0.04 degrees across the container width/height
    const simLat = 7.0873 - ((pctY - 50) / 100) * 0.04;
    const simLng = 79.9980 + ((pctX - 50) / 100) * 0.04;

    // Haversine-like relative distance simulation (1% ~ 75 meters)
    const dx = pctX - 50;
    const dy = pctY - 50;
    const distMeters = Math.round(Math.sqrt(dx * dx + dy * dy) * 75);

    setCoords({
      lat: Number(simLat.toFixed(4)),
      lng: Number(simLng.toFixed(4)),
      distance: distMeters,
      active: true,
      x: pctX,
      y: pctY
    });
  };

  const handleMouseLeave = () => {
    setCoords(prev => ({
      ...prev,
      active: false
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsSubmitting(true);

    // Simulate API request or trigger mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Attempt opening mailto link
      const mailtoUrl = `mailto:thiwanka.munasinghe@hotmail.com?subject=${encodeURIComponent(form.subject || 'Project Inquiry')}&body=${encodeURIComponent(`Hi Thiwanka,\n\n${form.message}\n\nRegards,\n${form.name}\n${form.email}`)}`;
      window.location.href = mailtoUrl;

      // Reset form
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <>
      {/* Introduction */}
      <div className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-base-content flex flex-wrap gap-x-2 items-center">
          Let’s Build Something <span className="text-primary font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Spatial</span> Together
        </h2>

      </div>

      <p className="xl:col-span-5 text-base-content/85 text-sm sm:text-base leading-relaxed text-left">
        I design automated backend spatial pipelines, model cartographic datasets, and build custom interactive web mapping applications. Send a message to discuss your next GIS or automation project.
      </p>


      {/* Contact Form Section */}
      <div className="xl:col-span-7 section-card p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg mb-4 text-base-content flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full" />
            Direct Message
          </h3>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center text-success text-2xl font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-lg text-base-content">Inquiry Initiated!</h4>
                <p className="text-sm text-base-content/70 mt-1 max-w-xs">
                  Opening your default email client to send the project inquiry details.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn btn-sm btn-outline mt-2"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label py-1 text-xs font-semibold uppercase tracking-wider text-base-content/60">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Jane Doe"
                    className="input input-bordered w-full text-sm py-2 px-3 focus:outline-primary focus:border-primary bg-base-100/50"
                  />
                </div>
                <div className="form-control">
                  <label className="label py-1 text-xs font-semibold uppercase tracking-wider text-base-content/60">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="jane@example.com"
                    className="input input-bordered w-full text-sm py-2 px-3 focus:outline-primary focus:border-primary bg-base-100/50"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label py-1 text-xs font-semibold uppercase tracking-wider text-base-content/60">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Map Dashboard Integration"
                  className="input input-bordered w-full text-sm py-2 px-3 focus:outline-primary focus:border-primary bg-base-100/50"
                />
              </div>

              <div className="form-control">
                <label className="label py-1 text-xs font-semibold uppercase tracking-wider text-base-content/60">Project Details</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project, data requirements, or workflow bottlenecks..."
                  className="textarea textarea-bordered w-full text-sm py-2 px-3 focus:outline-primary focus:border-primary bg-base-100/50 h-28"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="my-primary-btn group relative w-full text-center inline-flex items-center justify-center py-2.5 bg-primary text-base-100 font-semibold cursor-pointer border border-primary hover:bg-transparent transition-all rounded"
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  <span className="flex items-center justify-center gap-2 group-hover:text-primary transition-colors">
                    <BiMailSend className="w-5 h-5" /> Launch Mail Client
                  </span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>


      {/* Spatial Radar Widget */}
      <div className="hidden xl:col-span-5 section-card p-6 flex flex-col justify-between overflow-hidden bg-info/5 border border-primary/10">
        <div className="flex flex-col h-full justify-between gap-4">
          <div>
            <h3 className="font-semibold text-lg mb-1 text-base-content flex items-center gap-2">
              <span className="w-1.5 h-6 bg-accent rounded-full animate-pulse" />
              Geospatial Locator
            </h3>
            <p className="text-xs text-base-content/60">
              Pulsing location anchor over Gampaha, Sri Lanka. Hover/move mouse inside coordinates grid to simulate cartographic tracer.
            </p>
          </div>

          {/* Locator Grid Container */}
          <div
            ref={radarRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-48 sm:h-56 border border-base-content/15 rounded bg-base-100/60 overflow-hidden flex items-center justify-center cursor-crosshair select-none"
          >
            {/* GIS Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.06] pointer-events-none">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border-t border-l border-base-content" />
              ))}
            </div>

            {/* Target Axis crosshairs */}
            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-base-content/10 pointer-events-none" />
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-base-content/10 pointer-events-none" />

            {/* Pulsing Base location dot (Gampaha Center) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10">
              <span className="absolute w-12 h-12 rounded-full border border-primary/50 animate-ping opacity-75" />
              <span className="absolute w-6 h-6 rounded-full bg-primary/20 animate-pulse" />
              <span className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 border border-base-100" />
            </div>

            {/* Coordinates Grid Overlay Labels */}
            <div className="absolute bottom-1 right-2 text-[0.6rem] font-mono text-base-content/40 select-none pointer-events-none">
              Gampaha Grid Trace V1.0
            </div>
            <div className="absolute top-1 left-2 text-[0.6rem] font-mono text-base-content/40 select-none pointer-events-none">
              7&deg;05&apos;14.3&quot; N &middot; 79&deg;59&apos;52.8&quot; E
            </div>

            {/* Hover dynamic cursor dot and lines */}
            {coords.active && (
              <>
                {/* Laser alignment lines */}
                <div
                  className="absolute inset-y-0 w-[0.5px] border-l border-dashed border-accent/40 pointer-events-none"
                  style={{ left: `${coords.x}%` }}
                />
                <div
                  className="absolute inset-x-0 h-[0.5px] border-t border-dashed border-accent/40 pointer-events-none"
                  style={{ top: `${coords.y}%` }}
                />
                {/* Glowing cursor pointer */}
                <div
                  className="absolute w-2.5 h-2.5 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2 pointer-events-none shadow shadow-accent"
                  style={{ left: `${coords.x}%`, top: `${coords.y}%` }}
                />
              </>
            )}
          </div>

          {/* GIS Metadata readout console */}
          <div className="bg-base-200/50 rounded p-3 font-mono text-[0.7rem] sm:text-xs leading-5 border border-base-content/5 space-y-1">
            <div className="flex justify-between">
              <span className="text-base-content/50">SYSTEM ANCHOR:</span>
              <span className="font-semibold text-primary">Gampaha, Sri Lanka</span>
            </div>
            <div className="flex justify-between">
              <span className="text-base-content/50">LATITUDE / LONGITUDE:</span>
              <span className="font-bold text-base-content">
                {coords.active ? `${coords.lat.toFixed(4)}° N` : `7.0873° N`} / {coords.active ? `${coords.lng.toFixed(4)}° E` : `79.9980° E`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-base-content/50">REL DISTANCE TO ANCHOR:</span>
              <span className="text-accent font-semibold">
                {coords.active ? `${coords.distance} meters` : `0 meters (LOCK)`}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base-content/50">GRID TELEMETRY:</span>
              <span className={`px-1 rounded-sm text-[0.6rem] font-bold ${coords.active ? 'bg-accent/15 text-accent animate-pulse' : 'bg-primary/10 text-primary'}`}>
                {coords.active ? 'TRACE ACTIVE' : 'LOCKED ON BASE'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </>

  );
}