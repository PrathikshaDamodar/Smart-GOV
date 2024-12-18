import React from 'react';
import '../styles/PassportApplication.css';

function PassportApplicationDetails() {
    return (
        <div className="passport-application">
            <div className="page">
                <h2>Steps to Apply for an Indian Passport</h2>
                <ol>
                    <li>
                        <strong>Register on the Passport Seva Portal</strong><br />
                        • Visit the official Passport Seva website: <a href="https://portal1.passportindia.gov.in" target="_blank" rel="noopener noreferrer">Passport Seva Portal</a><br />
                        • Register by creating a new user account using your email address, login ID, and password.<br />
                        • After registration, log in to your account.
                    </li><br />

                    <li>
                        <strong>Fill the Passport Application Form</strong><br />
                        • After logging in, click on the ‘Apply for Fresh Passport/Re-issue of Passport’ link.<br />
                        • Choose between:
                        <ul>
                            <li>Download and Fill e-Form: Download and fill the PDF form offline, then upload it.</li>
                            <li>Online Form Submission: Fill the form directly online.</li>
                        </ul>
                        • Enter all necessary details such as personal information, family details, and more.
                    </li><br />

                    <li>
                        <strong>Submit the Passport Application Form</strong><br />
                        • If you filled out the PDF form, upload it.<br />
                        • For online submission, review and submit the form.<br />
                        • After submission, you will get the Application Reference Number (ARN), which can be used for tracking.
                    </li><br />

                    <li>
                        <strong>Schedule an Appointment</strong><br />
                        • Go to ‘View Saved/Submitted Applications’ section.<br />
                        • Select a Passport Seva Kendra (PSK) or Post Office Passport Seva Kendra (POPSK).<br />
                        • Choose an available date and time slot.<br />
                        • Pay the fee online using Net Banking, Credit/Debit Card, or UPI.<br />
                        • Download and print the appointment receipt.
                    </li><br />

                    <li>
                        <strong>Visit the Passport Seva Kendra (PSK) or POPSK</strong><br />
                        • Visit the PSK/POPSK on the appointment date with the following documents:
                        <ul>
                            <li>Appointment receipt</li>
                            <li>Original documents with self-attested copies (e.g., Aadhaar Card, Utility Bill, Birth Certificate)</li>
                        </ul>
                        • At the PSK/POPSK, you will go through token issuance, document verification, biometric data capture, and final verification.
                    </li><br />

                    <li>
                        <strong>Police Verification</strong><br />
                        • Your application will undergo police verification at your residence.<br />
                        • Ensure you are available for the visit and have copies of your documents ready.<br />
                        • The status will be updated on the Passport Seva Portal.
                    </li><br />

                    <li>
                        <strong>Track Your Passport Application Status</strong><br />
                        • Track the status using your Application Reference Number (ARN) on the Passport Seva Portal or the <a href="https://portal1.passportindia.gov.in" target="_blank" rel="noopener noreferrer">mPassport Seva App</a>.
                    </li><br />

                    <li>
                        <strong>Receive the Passport</strong><br />
                        • If approved, your passport will be dispatched.<br />
                        • You will be notified via SMS/email, and it will be delivered to your address via India Post.
                    </li>
                </ol>

                <h3 className="section-title">Types of Passports and Processing Times</h3>
                <ul>
                    <li><strong>Ordinary Passport (Blue Cover)</strong> - For general travel. Normal processing takes 30-45 days, while Tatkal takes 1-7 days.</li>
                    <li><strong>Diplomatic Passport (Maroon Cover)</strong> - Issued to government representatives.</li>
                    <li><strong>Official Passport (White Cover)</strong> - Issued to government employees on official duties.</li>
                </ul>

                <h3 className="section-title">Fees for Indian Passport (as of 2024)</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Normal (₹)</th>
                            <th>Tatkal (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fresh Passport (36 pages)</td>
                            <td>₹1,500</td>
                            <td>₹3,500</td>
                        </tr>
                        <tr>
                            <td>Fresh Passport (60 pages)</td>
                            <td>₹2,000</td>
                            <td>₹4,000</td>
                        </tr>
                        <tr>
                            <td>Re-issue of Passport</td>
                            <td>Varies based on request</td>
                            <td>Varies based on request</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className="section-title">Documents Required for Passport Application</h3>
                <ul>
                    <li><strong>Proof of Identity:</strong> Aadhaar Card, Voter ID, PAN Card, or Driving License</li>
                    <li><strong>Proof of Address:</strong> Aadhaar Card, Utility Bill, Bank Statement, Rent Agreement</li>
                    <li><strong>Proof of Date of Birth:</strong> Birth Certificate, Matriculation Certificate, Aadhaar Card, School Leaving Certificate</li>
                </ul>

                {/* FAQ Section */}
                <h3 className="section-title">Frequently Asked Questions (FAQs)</h3>
                <div className="faq-section">
                    <div className="faq-item">
                        <strong>1. How long does it take to receive my passport?</strong>
                        <p>The processing time for a normal passport is typically 30-45 days, and for Tatkal, it is 1-7 days. After police verification, you will receive updates on the delivery.</p>
                    </div>
                    <div className="faq-item">
                        <strong>2. What if I miss my appointment?</strong>
                        <p>If you miss your appointment, you can reschedule it via the Passport Seva Portal. However, make sure to do so as soon as possible to avoid delays.</p>
                    </div>
                    <div className="faq-item">
                        <strong>3. Can I apply for a passport without Aadhaar Card?</strong>
                        <p>You can apply for a passport without an Aadhaar Card by submitting other valid proofs of identity such as Voter ID, PAN Card, or Driving License.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PassportApplicationDetails;
