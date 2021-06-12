import React from "react";
import { Route } from "react-router-dom";
import BeforeBloodDonationPage from "./before_blood_donation";
import DuringBloodDonationPage from "./during_blood_donation";
import AfterBloodDonationPage from "./after_blood_donation";

export default function DonationProcess() {
  return (
    <div>
      <br />
      <h1>Donation process</h1>
      <br />
      <Route
        exact
        path="/DonationProcess/BeforeBloodDonation"
        component={BeforeBloodDonationPage}
      />
      <Route
        exact
        path="/DonationProcess/DuringBloodDonation"
        component={DuringBloodDonationPage}
      />
      <Route
        exact
        path="/DonationProcess/AfterBloodDonation"
        component={AfterBloodDonationPage}
      />
    </div>
  );
}
