import React from "react";
import "../styles/VehicleRegistration.css";

function VehicleRegistrationDetails() {
    return (
        <div className="main">
            <div className="vehicle-registration">
                <h2>Steps to Apply for Vehicle Registration:</h2>
                <p>A vehicle registration is an official record of a vehicle with the Regional Transport Office (RTO), authorizing it to be legally operated on public roads.</p>

                <h3>Steps to Apply for Vehicle Registration:</h3>

                <ol>
                    <li>
                        <strong>Visit the Official Transport Department Website</strong><br />
                        - Go to the official website for your region or <a href="https://transport.karnataka.gov.in/english" target="_blank">Karnataka Transport</a> or <a href="https://morth.nic.in/" target="_blank">MORTH</a> for pan-India services.<br />
                        - Look for the "Vehicle Registration" or "Online Services" section.
                    </li><br />

                    <li>
                        <strong>Create an Account or Log in</strong><br />
                        - New users will need to create an account using their email ID or mobile number.<br />
                        - Existing users can log in with their credentials.
                    </li><br />

                    <li>
                        <strong>Choose the Vehicle Registration Option</strong><br />
                        - Select the type of vehicle registration you are applying for (e.g., New Registration, Temporary Registration).
                    </li><br />

                    <li>
                        <strong>Fill in the Vehicle Details</strong><br />
                        - Enter details like vehicle type, make and model, engine and chassis numbers, date of purchase, and owner information.
                    </li><br />

                    <li>
                        <strong>Upload the Required Documents</strong><br />
                        - Common documents include:<br />
                        - Identity Proof, Address Proof, Vehicle Invoice, Insurance Certificate, Pollution Under Control (PUC) certificate, etc.
                    </li><br />

                    <li>
                        <strong>Pay the Registration Fees</strong><br />
                        - Pay the required registration fees online using net banking, credit/debit card, or UPI.
                    </li><br />

                    <li>
                        <strong>Receive an Application Receipt</strong><br />
                        - After submission, a receipt with a reference number will be provided.
                    </li><br />

                    <li>
                        <strong>Schedule a Vehicle Inspection (If Required)</strong><br />
                        - Some vehicles require a physical inspection by the RTO to verify chassis and engine numbers.
                    </li><br />

                    <li>
                        <strong>Wait for Registration Approval</strong><br />
                        - The RTO will verify documents and approve the registration if all requirements are met.
                    </li><br />

                    <li>
                        <strong>Receive Your Registration Certificate (RC)</strong><br />
                        - Your RC will be sent by post or email, or you can collect it from the RTO.
                    </li>
                </ol>
                {/* Embedding YouTube Video */}
                <h4>Watch this video for more details:</h4>
                <div className="video-container">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4o6v2xTGAS8?si=Jdi0HHC2bs3jLBM3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <h3>FAQ’s for Vehicle Registration:</h3>

                <ol>
                    <li>
                        <strong>What is Vehicle Registration?</strong><br />
                        - Vehicle registration is the process of officially recording a vehicle with the RTO, giving it a unique registration number for legal use on public roads.
                    </li><br />

                    <li>
                        <strong>Why do I need to register my vehicle?</strong><br />
                        - Vehicle registration ensures the vehicle complies with safety and legal standards, proves ownership, and is trackable in case of accidents or theft.
                    </li><br />

                    <li>
                        <strong>What documents are required for vehicle registration?</strong><br />
                        - Common documents include Proof of Identity, Address Proof, Purchase Invoice, Form 20 (Application for Registration), and Insurance Certificate.
                    </li><br />

                    <li>
                        <strong>How do I apply for vehicle registration?</strong><br />
                        - You can apply online or offline at the nearest RTO. Complete the necessary forms, upload documents, and pay the required fees.
                    </li><br />

                    <li>
                        <strong>How long does it take to get a Registration Certificate (RC)?</strong><br />
                        - Once approved, the RC is typically sent within a few weeks, or you can collect it from the RTO.
                    </li><br />

                    <li>
                        <strong>Do I need to schedule a vehicle inspection?</strong><br />
                        - Not all vehicles require an inspection, but it may be necessary for certain cases (e.g., used vehicles or those with temporary registration).
                    </li><br />

                    <li>
                        <strong>How can I check the status of my registration?</strong><br />
                        - You can check the status of your registration application through the transport department's website.
                    </li><br />

                    <li>
                        <strong>What is the fee for vehicle registration?</strong><br />
                        - Registration fees vary based on vehicle type, engine capacity, and other factors. You will be informed of the fees during the application process.
                    </li><br />
                </ol>
            </div>
        </div>
    );
}

export default VehicleRegistrationDetails;
