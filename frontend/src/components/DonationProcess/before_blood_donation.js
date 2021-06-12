import React from "react";
import { Link } from "react-router-dom";
import "./donation_process_style.css";

export default function BeforeBloodDonationPage() {
  return (
    <div className="BloodDonation">
      <h2>Preparing to give blood</h2>
      <ul>
        <p>
          Your blood donation experience will be pleasant, safe and
          straightforward if you follow the following tips:
        </p>
        <li>
          <span>Eat</span> <br />
          Eating regularly before donating will help to keep your blood sugar
          levels stable. This is important so that you don’t feel lightheaded or
          dizzy after your donation. Having a snack before you donate can help
          maintain these blood sugar levels. Ensuring that your diet contains
          foods rich in iron - such as meats and green leafy vegetables - will
          help to keep you feeling well during and after donation.
        </li>
        <br />
        <li>
          <span>Drink</span> <br />
          Almost half of the blood that you donate is made up of water. The
          fluids that you lose during donation can cause a drop in blood
          pressure, causing you to feel faint and dizzy. To help prevent this
          from happening we ask you to drink 500ml of water immediately before
          you donate - we’ll give this to you before you donate. Please help us
          reduce our plastic usage by bringing your own refillable water bottle.
          <br />
          It’s also important to ensure that you are well hydrated in the days
          leading up to your donation. This will help to compensate for the
          fluids lost during donation, and will help to bring your blood volume
          levels back to normal. It is essential to avoid alcohol before and
          after donating as this may affect hydration levels and delay recovery.
        </li>
        <br />
        <li>
          <span>Exercise</span> <br />
          Avoid doing any vigorous exercise or heavy lifting the day of your
          donation – both before and after you’ve donated. Keeping your body in
          a rested state is important to give it a chance to replenish the
          fluids lost during donation, which will help you avoid feeling dizzy
          or lightheaded and keep you well. Light exercise such as walking is
          fine, but please make sure that you are fully recovered and hydrated
          prior to your donation.
        </li>
        <br />
        <li>
          <span>Wear</span> <br />
          We will need to roll up your sleeve past your elbow when you donate to
          allow easy access to your veins. To make sure that you are
          comfortable, please wear clothing with loose sleeves. You will need to
          wear a fabric face covering when you donate so make sure you have one
          before travelling. It doesn’t have to be a surgical mask but should
          cover your mouth and nose.
        </li>
        <br />
        <li>
          <span>Distract</span> <br />
          It is normal to feel nervous when you come along to donate –
          particularly if this is your first time. Our friendly and helpful
          staff will put you at ease straightaway. Distraction is key. You could
          bring a book to read or listen to some music while you donate.
          <br /> We also ask donors to undertake something called ‘applied
          muscle tension’ or AMT. This is a simple behavioral technique that
          helps to maintain blood pressure, and so stops you from feeling faint
          or unwell. It is also a brilliant distraction technique! AMT involves
          tensing and relaxing the body’s major muscles during the donation
          process.
        </li>
        <br />
        <li>
          <span>Know</span> <br />
          Once you’ve made the decision to donate and made the effort to go
          along to your appointment, you want to be sure that you can actually
          donate. Although most people can donate, there are some restrictions
          depending on things like your health, medication, and whether you've
          been abroad recently.{" "}
          <Link id="donationCriteria" to="/WhoCanGiveBlood">
            You can read more about it right here.
          </Link>
        </li>
        <br />
        <li>
          <span>Sleep</span> <br />
          We recommend that you have a full night’s sleep of between 7 to 9
          hours the night before your donation. This will help you to feel more
          alert when you donate, which will in turn reduce the risk of feeling
          unwell.
        </li>
      </ul>
    </div>
  );
}
