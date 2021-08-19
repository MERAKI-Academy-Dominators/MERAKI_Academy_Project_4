import React from "react";
import { Route } from "react-router-dom";
import BeforeBloodDonationPage from "./before_blood_donation";
import DuringBloodDonationPage from "./during_blood_donation";
import AfterBloodDonationPage from "./after_blood_donation";

export default function DonationProcess() {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Donation process</h1>
      <br />
      <BeforeBloodDonationPage/>
      <hr/>
      <DuringBloodDonationPage/>
      <hr/>
      <AfterBloodDonationPage/>
    </div>
  );
}
