import React from "react";
import "../styles/Aadhar.css";

function AadharDetails() {
    return (
        <>
            <body className="main">
                <div className="aadhar">
                    <div className="page">

                        <div className="card-title">
                            <h1>AADHAAR Card</h1>
                        </div>

                        <h4>To apply for an Aadhaar card, follow these steps:</h4> <br />
                        1. Locate Enrollment Center<br />
                        - Find the nearest Aadhaar Enrollment Center. You can check the official UIDAI website for
                        the nearest center.<br />
                        Click on the URL for the official website:
                        <a href="https://uidai.gov.in/" target="_blank" rel="noopener noreferrer">
                            UIDAI Website
                        </a><br /><br />

                        2. Book an Appointment (Optional)<br />
                        - While it's not mandatory, you can save time by booking an appointment online through
                        the UIDAI website.<br />
                        Click on the URL to book an appointment:
                        <a href="https://appointments.uidai.gov.in/" target="_blank" rel="noopener noreferrer">
                            Book Appointment
                        </a><br /><br />

                        3. Visit the Enrollment Center:<br />
                        - Go to the chosen Enrollment Center with necessary documents.<br /><br />

                        4. Documents Required:<br />
                        - Carry proof of identity (passport, PAN card, etc.), proof of address (utility bills, ration card, etc.), and proof of date of birth (birth certificate, school certificate, etc.).<br /><br />

                        5. Fill the Enrollment Form<br />
                        - Obtain the enrollment form at the center and fill in the required details.<br /><br />

                        6. Biometric Data Collection:<br />
                        - Your fingerprints and iris scan will be taken as part of the biometric data collection.<br /><br />

                        7. Photograph:<br />
                        - A photograph will be taken at the center.<br /><br />

                        8. Receive Acknowledgment Slip:<br />
                        - After completing the enrollment process, you will receive an acknowledgment slip with an enrollment ID.<br /><br />

                        9. Check Aadhaar Status:<br />
                        - You can check the status of your Aadhaar card online using the Enrollment ID on the official UIDAI website.<br />
                        Click on the URL to check the status of Aadhaar card:
                        <a href="https://myaadhaar.uidai.gov.in/CheckAadhaarStatus" target="_blank" rel="noopener noreferrer">
                            Check Aadhaar Status
                        </a><br /><br />

                        10. Download e-Aadhaar:<br />
                        - Once your Aadhaar is processed, download the e-Aadhaar from the UIDAI website.<br />
                        Click on the URL to download e-Aadhaar:
                        <a href="https://myaadhaar.uidai.gov.in/genricDownloadAadhaar" target="_blank" rel="noopener noreferrer">
                            Download e-Aadhaar
                        </a><br /><br />

                        <h4>NOTE:</h4><br />
                        - Be sure to carry original documents for verification at the enrollment center.<br />
                        - Double-check all information before submitting the form.<br />
                        - Save the acknowledgment slip until you receive your Aadhaar card.<br /><br />


                        {/* Embedding YouTube Video */}
                        <h4>Watch this video for more details:</h4>
                        <div className="video-container">

                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/CdE8jB7u6f4?autoplay=1&si=Z-liQL46gY87ZAS2"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h4>Frequently Asked Questions (FAQs) about Aadhaar:</h4>
                        <ol>
                            <li><strong>What is Aadhaar?</strong> - Aadhaar is a unique identification number issued by the Indian government to residents of India.</li>
                            <li><strong>How can I apply for Aadhaar?</strong> - Visit an authorized Aadhaar Enrollment Center with supporting documents.</li>
                            <li><strong>What documents are required to apply for Aadhaar?</strong> - Proof of identity, address, and date of birth.</li>
                            <li><strong>Can I apply for Aadhaar online?</strong> - No, initial application requires physical presence at an Enrollment Center.</li>
                            <li><strong>How can I check the status of my Aadhaar?</strong> - Use the Enrollment ID on the UIDAI website.</li>
                            <li><strong>How can I download my e-Aadhaar?</strong> - Download it from the UIDAI website with your Aadhaar number and OTP.</li>
                            <li><strong>What should I do if my Aadhaar is lost?</strong> - Retrieve it using your registered mobile number or Enrollment ID.</li>
                            <li><strong>Can I update my Aadhaar details?</strong> - Yes, you can update details online or at the Enrollment Center.</li>
                            <li><strong>Is Aadhaar mandatory for government schemes?</strong> - Yes, it's required for many schemes like LPG subsidy and MNREGA.</li>
                            <li><strong>How secure is Aadhaar?</strong> - Aadhaar data is stored securely with encryption, but it should be protected from misuse.</li>
                        </ol><br /><br />
                    </div>
                </div>
            </body>
        </>
    );
}

export default AadharDetails;