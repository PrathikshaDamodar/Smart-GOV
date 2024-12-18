import React from "react";
import "../styles/LandRegistration.css";

function LandRegistrationDetails() {
    return (
        <>
            <body className="main">
                <div className="land-registration">
                    <div className="page">

                        <h2>Steps to Apply for Land Registration:</h2>
                        <p>Land registration is the process of registering the legal ownership of a property with the respective government authorities to secure the ownership and prevent any disputes.</p>

                        <h3>Steps to Register Land:</h3>

                        <ol>
                            <li>
                                <strong>Verification of Property Details</strong><br />
                                - Check the property title and ensure that it is clear of disputes.<br />
                                - Verify details like the previous ownership, title deeds, and any legal dues or encumbrances.
                            </li><br />

                            <li>
                                <strong>Agreement to Sell</strong><br />
                                - Prepare an Agreement to Sell between the buyer and seller.<br />
                                - Mention terms like the agreed sale price, advance payment, and the payment schedule.<br />
                                - Get this agreement notarized if required.
                            </li><br />

                            <li>
                                <strong>Stamp Duty Payment</strong><br />
                                - Calculate the applicable Stamp Duty based on the property's market value.<br />
                                - Pay the stamp duty using online or offline methods. Different states have different rates.
                            </li><br />

                            <li>
                                <strong>Drafting the Sale Deed</strong><br />
                                - Hire a lawyer to draft a Sale Deed.<br />
                                - This document will serve as proof of the property transfer.<br />
                                - It should include details like buyer and seller's names, property details, sale price, etc.
                            </li><br />

                            <li>
                                <strong>Visit the Sub-Registrar’s Office</strong><br />
                                - Schedule an appointment at the local Sub-Registrar's Office for the registration.<br />
                                - Both the buyer and seller (with two witnesses) need to be present.<br />
                                - Carry all original documents and IDs for verification.
                            </li><br />

                            <li>
                                <strong>Document Verification</strong><br />
                                - Present documents like the Sale Deed, previous property documents, identity proof, address proof, and proof of stamp duty payment.<br />
                                - Pay the registration fee as per the state rules (usually a percentage of the property value).
                            </li><br />

                            <li>
                                <strong>Registration and Receipt</strong><br />
                                - Sign the Sale Deed in front of the registrar.<br />
                                - Once verified, the registrar will provide a registration number and a receipt.<br />
                                - Collect the registered documents a few days after the registration.
                            </li><br />

                            <li>
                                <strong>Mutation of Property</strong><br />
                                - Apply for a Mutation of property in the local municipal records.<br />
                                - This changes the ownership from the seller's name to the buyer’s name in the land records.
                            </li>
                        </ol>
                    </div>
                </div>
            </body>
        </>
    );
}

export default LandRegistrationDetails;
