import React from "react";
import "../styles/Pan.css";

function PanDetails() {
    return (
        <>
            <body className="main">
                <div className="pan">
                    <div className="page">


                        <h1>PAN Card</h1>  <br /><br /><br />
                        <h3>To apply for a PAN card, follow these steps:</h3>  <br /><br /><br />

                        <h4>1. Visit the Official Websites</h4><br />
                        - Go to the official websites for processing PAN applications: <br />
                        - <a href="https://nsdl.co.in/" target="_blank" rel="noopener noreferrer">NSDL Website</a> or <a href="https://www.utiitsl.com/#main-content-skipwebsite" target="_blank" rel="noopener noreferrer">UTIITSL Website</a> <br /><br />

                        <h4>2. Choose the Appropriate Form</h4><br />
                        - For Indian citizens: Use Form 49A. <br />
                        - For Foreign citizens: Use Form 49AA. <br /><br />

                        <h4>3. Fill in the Form</h4><br />
                        - Provide details like name, date of birth, address, email, phone number, etc. <br />
                        - Select the appropriate document proof for identity, address, and date of birth. <br /><br />

                        <h4>4. Submit Documents Online</h4><br />
                        - Upload scanned copies of documents such as Aadhaar Card, Passport, Voter ID, etc. <br />
                        - Upload your passport-sized photograph and signature. <br /><br />

                        <h4>5. Payment</h4><br />
                        - Pay the processing fee: <br />
                        - ₹107 (excluding GST) for Indian communication addresses.<br />
                        - ₹1,017 (excluding GST) for foreign communication addresses.<br /><br />

                        <h4>6. Acknowledge Receipt</h4><br />
                        - After submitting the form, you will receive an acknowledgment number. Keep this for future tracking. <br /><br />

                        <h4>7. Send Documents (if applicable)</h4><br />
                        - In some cases, physical submission may be necessary. Send the signed acknowledgment along with required documents to the addresses provided on the website. <br /><br />

                        <h4>8. Track Your Application</h4><br />
                        - Use the acknowledgment number to track your application status. <br /><br />

                        <h4>9. Receive PAN Card</h4><br />
                        - Once approved, the PAN card will be dispatched to your registered address within 15 working days. <br />
                        - You will receive both physical and e-PAN formats. <br /><br />

                        <h4>Offline Method:</h4><br />
                        1. Obtain Form 49A from authorized PAN service centers. <br />
                        2. Fill in the form, attach necessary documents, and submit it at the PAN service center. <br />
                        3. Collect acknowledgment and track your application. <br /><br />

                        <h4>Documents Required:</h4><br />
                        - Identity Proof: Aadhaar Card, Voter ID, Passport, etc. <br />
                        - Address Proof: Utility Bill, Bank Statement, Aadhaar, etc. <br />
                        - Date of Birth Proof: Birth Certificate, Aadhaar Card, Matriculation Certificate, etc. <br />
                        - Passport-sized Photographs: 2-3 copies. <br />
                        - Signature on a white sheet (for online applications). <br /><br />

                        {/* Embedding YouTube Video */}
                        <h4>Watch this video for more details:</h4>
                        <div className="video-container">

                            <iframe width="560" height="315" src="https://www.youtube.com/embed/KvGih37Xotc?si=uDm9XnEHRr88JkFn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <h4>FAQs for PAN Card:</h4><br />
                        <h4>1. What Is PAN?</h4><br />
                        - Permanent Account Number (PAN) is a ten-digit alphanumeric number issued by the Income Tax Department. It is used for various tax-related purposes and acts as an identifier for individuals and businesses. <br /><br />

                        <h4>2. Why Is It Necessary to Have PAN?</h4><br />
                        - PAN is required for tax filing, financial transactions such as property sales, motor vehicle purchases, opening a bank account, and more. <br /><br />

                        <h4>3. Who Must Have a PAN?</h4><br />
                        - Individuals, businesses, and others who are required to file income tax returns or engage in certain financial transactions need a PAN. <br /><br />

                        <h4>4. Can I Apply for PAN Online?</h4><br />
                        - Yes, you can apply for PAN online through the <a href="https://tin.tin.nsdl.com/pan/index.html" target="_blank" rel="noopener noreferrer">NSDL Website</a> or the <a href="http://www.utitsl.co.in/utitsl/uti/newapp/new-pan-application.jsp" target="_blank" rel="noopener noreferrer">UTIITSL Website</a>. <br /><br />

                        <h4>5. How Do I Track My PAN Application?</h4><br />
                        - You can track your PAN application status using the acknowledgment number on the respective portal. <br /><br />

                        <h4>6. Where to Apply for PAN?</h4><br />
                        - You can apply at IT PAN Service Centers or TIN Facilitation Centers authorized by the Income Tax Department. <br /><br />
                        <h4>Watch this video for more details:</h4>

                    </div>
                </div>
            </body>
        </>
    );
}

export default PanDetails;
