import React from "react";

export default function BloodTypesPage() {
  return (
    <div>
      <div id="">
        <h2>Blood Types</h2>
        <h3>
          How much of the donor population does each blood type represent?
        </h3>
        <p>
          There are eight main blood types but some are rarer than others. The
          list below shows the percentage of donors with each blood type:
          <p>
            O positive makes about 35% of donors, making it the most common
            blood type
          </p>
          <p>
            O negative makes about 13% of donors. Donors with this blood type
            are often called 'universal donors'
          </p>
          <p>
            A positive makes about 30% of donors, making it the second most
            common blood type
          </p>
          <p>
            A negative makes about 8% of donors. It's the universal platelet
            type
          </p>
          <p>B positive makes about 8% of donors</p>
          <p>
            B negative makes about 2% of donors, making one of the rarest blood
            types
          </p>
          <p>AB positive makes about 2% of donors</p>
          <p>
            AB negative makes about 1% of donors. It's the rarest of the 8 main
            blood types
          </p>
        </p>
        <br />

        <h3>Which blood types are compatible?</h3>
        <p>
          You can receive blood from a donor with the same blood type as you.
          You can also receive blood from a donor with a compatible blood type.
          Similarly, a person with a different blood type to you may be able to
          safely receive your blood. O negative blood is known as the universal
          blood type because it is safe for everyone to receive O negative red
          cells.
        </p>
        <br />

        <h3>How do blood types work?</h3>
        <p>
          Your blood group is inherited from genes passed on by your parents.
          The two most important blood group systems for transfusion are ABO and
          Rh. The ABO group system gives the letter part of your blood type and
          Rh system gives the positive or negative part.
        </p>
        <br />

        <h3>The ABO group system</h3>
        <p>
          There are four main blood groups in the ABO group system. Each group
          is important and we need donors from every group to ensure we have the
          right blood for the people who need it. Which group you belong to
          depends on the antigens and antibodies in your blood. Antigens are a
          combination of sugars and proteins that coat the surface of a red
          blood cell. Depending on your combination, you will have either{" "}
          <span style={{ fontWeight: "bolder" }}>A antigens</span>,{" "}
          <span style={{ fontWeight: "bolder" }}>B antigens</span>,{" "}
          <span style={{ fontWeight: "bolder" }}>both</span> antigens, or{" "}
          <span style={{ fontWeight: "bolder" }}>none</span> of those antigens.
          <br />
          <br />
          You also have antibodies in the clear part of blood called{" "}
          <span style={{ fontWeight: "bolder" }}>plasma</span>. Antibodies are
          important in transfusion because they are the body’s natural defence
          system. They recognize any ‘foreign’ antigens and tell your immune
          system to destroy them. That’s why giving someone blood from the wrong
          ABO group can be life-threatening. It is the presence of A and B
          antigens and corresponding antibodies that determines your ABO blood
          group.
          <br />
          <h4>Blood group O</h4>
          Antigens on red cell: none <br />
          Antibodies in plasma: anti-A and anti-B <br />
          <br />
          <h4>Blood group A</h4>
          Antigens on red cell: A <br />
          Antibodies in plasma: anti-B <br />
          <br />
          <h4>Blood group B</h4>
          Antigens on red cell: B <br />
          Antibodies in plasma: anti-A <br />
          <br />
          <h4>Blood group AB</h4>
          Antigens on red cell: A and B <br />
          Antibodies in plasma: none <br />
        </p>
        <br />

        <h3>Positive or negative blood</h3>
        <p>
          The <span style={{ fontWeight: "bolder" }}>D antigen</span> in the Rh
          system determines whether you have positive or negative blood. If you
          have the Rh D antigen, your blood type is positive. If you lack the Rh
          D antigen, your blood type is negative. 77% of our donors are Rh D
          positive. There are four other main antigens in the Rh system. Your
          combination of these makes up your blood subtype.
        </p>
      </div>
    </div>
  );
}
