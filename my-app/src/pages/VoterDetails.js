import React from 'react';
import '../styles/VoterIdApplication.css';

function VoterIdApplicationDetails() {
    return (
        <div className="voter-id-application">
            <div className="page">
                <h2>Steps to Apply for a Voter ID</h2>
                <ol>
                    <li>
                        <strong>Visit the National Voter Service Portal (NVSP)</strong><br />
                        • Go to the official National Voter Service Portal (NVSP) website: <a href="https://www.nvsp.in" target="_blank" rel="noopener noreferrer">National Voter Service Portal</a><br />
                        • This is the official portal for applying for a Voter ID and checking voter registration status in India.
                    </li><br />

                    <li>
                        <strong>Register or Log in</strong><br />
                        • If you are a new user, click on the "Login/Register" button at the top of the page to create an account.<br />
                        • You can register using your email ID or mobile number.<br />
                        • If you already have an account, simply log in using your credentials.
                    </li><br />

                    <li>
                        <strong>Fill in Form 6 (Application for Voter Registration)</strong><br />
                        • Once logged in, click on "Apply online for registration of new voter" or "Apply for Voter ID".<br />
                        • This will open Form 6, which is used for voter registration.<br />
                        • Fill in the following details:
                        <ul>
                            <li>Name</li>
                            <li>Gender</li>
                            <li>Date of Birth</li>
                            <li>Address</li>
                            <li>Constituency</li>
                            <li>Mobile Number and Email</li>
                        </ul>
                    </li><br />

                    <li>
                        <strong>Upload Documents</strong><br />
                        • Proof of Identity: Upload documents like your Aadhaar card, Passport, PAN card, or any other identity proof.<br />
                        • Proof of Address: Upload documents such as Aadhaar card, Utility bills, Bank statements, or Rental agreements.<br />
                        • Photograph: Upload a recent passport-sized photograph.<br />
                        • All documents should be clear and readable.
                    </li><br />

                    <li>
                        <strong>Verify Your Details</strong><br />
                        • Double-check the information entered in Form 6 and ensure all documents are correctly uploaded.<br />
                        • After filling the form and uploading documents, click on the "Submit" button.
                    </li><br />

                    <li>
                        <strong>Receive Reference Number</strong><br />
                        • After submission, you will receive a reference number. Keep this for tracking the status of your application.<br />
                        • The reference number will also be sent to your email address or mobile number.
                    </li><br />

                    <li>
                        <strong>Wait for Verification</strong><br />
                        • After submitting the application, the Election Commission will verify the details and documents you have provided.<br />
                        • You may be required to undergo a household verification, where an official may visit your address to confirm the information.
                    </li><br />
                </ol>

                <h3>FAQ’s for Voter ID</h3>
                <ul>
                    <li><strong>What is a Voter ID?</strong><br />A Voter ID is an official document issued by the Election Commission of India, which serves as proof of identity and eligibility for voting in elections. It is required to cast your vote in Indian elections.</li><br />
                    <li><strong>How can I apply for a Voter ID?</strong><br />You can apply for a Voter ID online or offline:
                        <ul>
                            <li>Online: Visit the official <a href="https://elections24.eci.gov.in/" target="_blank" rel="noopener noreferrer">elections24.eci.gov.in</a> website, fill in Form 6, and upload the necessary documents.</li>
                            <li>Offline: Visit the nearest Electoral Registration Office (ERO), fill out Form 6, and submit the required documents.</li>
                        </ul>
                    </li><br />
                    <li><strong>What documents are required to apply for a Voter ID?</strong><br />You will need the following documents:
                        <ul>
                            <li>Proof of Identity: Aadhaar card, Passport, PAN card, or any government-issued ID.</li>
                            <li>Proof of Address: Utility bill, bank statement, Aadhaar card, passport, etc.</li>
                            <li>Proof of Age (if required): Birth certificate, school leaving certificate, etc.</li>
                            <li>Photograph: Recent passport-sized photograph.</li>
                        </ul>
                    </li><br />
                    <li><strong>What is the minimum age to apply for a Voter ID?</strong><br />You must be at least 18 years old on the date of applying for voter registration to be eligible for a Voter ID.</li><br />
                    <li><strong>Can I apply for a Voter ID online?</strong><br />Yes, you can apply for a Voter ID online by visiting the <a href="https://elections24.eci.gov.in/" target="_blank" rel="noopener noreferrer">elections24.eci.gov.in</a> website and filling out Form 6.</li><br />
                    <li><strong>How long does it take to get a Voter ID?</strong><br />The processing of a Voter ID generally takes 3 to 6 weeks after submission, depending on the state or region. You will receive the Voter ID at your registered address once it is processed.</li><br />
                    <li><strong>What is Form 6?</strong><br />Form 6 is the application form used for registering a new voter in the electoral roll. This form is required when you are applying for a Voter ID for the first time or when you need to update your details in the voter list.</li><br />
                    <li><strong>Can I change my address or other details on my Voter ID?</strong><br />Yes, if you need to update your address, name, or other details, you can fill out Form 8 for correction. You can do this either online or by submitting it at the local Electoral Registration Office.</li><br />
                    <li><strong>What is the validity of the Voter ID?</strong><br />The Voter ID is valid as long as the voter remains eligible to vote. However, if there are any changes in personal details (like address or name), the Voter ID will need to be updated.</li><br />
                    <li><strong>What to do if my Voter ID is lost or damaged?</strong><br />If your Voter ID is lost or damaged, you can apply for a duplicate Voter ID by filling out Form 2 and submitting it to the local Electoral Registration Office.</li><br />
                    <li><strong>How can I check if my name is in the voter list?</strong><br />You can check if your name is in the voter list by visiting the <a href="https://elections24.eci.gov.in/" target="_blank" rel="noopener noreferrer">elections24.eci.gov.in</a> website. Use the voter list search tool and enter the required details (name, area, etc.) to check.</li><br />
                </ul>
            </div>
        </div>
    );
}

export default VoterIdApplicationDetails;
