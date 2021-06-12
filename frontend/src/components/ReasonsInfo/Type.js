import React from 'react';
import { Route } from 'react-router-dom';
import demand from './Demand.css'
import Blood from './blood.mp4'

const Type = () => {
	return ( <div  className="font">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Blood types</h2>
        <br/>
        <h2>Find out your blood type</h2>
        <h5>You will find out your blood type after your first blood donation.  </h5>
        <br/>
        <br/>
        <h2>What are the rarest blood types?</h2>
        <h5>1) O positive: 35%<br/>2) O negative: 13%<br/>3) A positive: 30%<br/>4) A negative: 8%<br/>5) B positive: 8%<br/>6) B negative: 2%<br/>7) AB positive: 2%<br/>8) AB negative: 1%</h5>
        <br/>
        <br/>
        <h2>Which blood types are compatible?</h2>
        <h5>You can receive blood from a donor with the same blood type as you.</h5>
        <h5>You can also receive blood from a donor with a compatible blood type.</h5>
        <h5>Similarly, a person with a different blood type to you may be able to safely receive your blood.</h5>
        <h5>O negative blood is known as the universal blood type because it is safe for everyone to receive O negative red cells.</h5>
        <br/>
        <br/>
        <h2>Who can receive my blood?</h2>
        <br/>
        <br/>
        <video src={Blood} width="500" height="240" controls/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>How do blood types work?</h2>
        <h5>Your blood group is inherited from genes passed on by your parents.</h5>
        <h5>The two most important blood group systems for transfusion are ABO and Rh.</h5>
        <h5>The ABO group system gives the letter part of your blood type and Rh system gives the positive or negative part.</h5>
        <br/>
        <br/>
        <h2>The ABO group system</h2>
        <h5>There are four main blood groups in the ABO group system.</h5>
        <h5>Each group is important and we need donors from every group to ensure we have the right blood for the people who need <br/> it.</h5>
        <h5>Which group you belong to depends on the antigens and antibodies in your blood.</h5>
        <h5>Antigens are a combination of sugars and proteins that coat the surface of a red blood cell.</h5>
        <h5>Antibodies are important in transfusion because they are the body’s natural defence system. They recognise any ‘foreign’ <br/> antigens and tell your immune system to destroy them.</h5>
        <h5>That’s why giving someone blood from the wrong ABO group can be life-threatening.</h5>
        <h5>It is the presence of A and B antigens and corresponding antibodies that determines your ABO blood group.</h5>
        <br/>
        <br/>
        <h2>Blood group O</h2>
        <h5>Antigens on red cell: none</h5>
        <h5>Antibodies in plasma: anti-A and <br/> anti-B</h5>
        <br/>
        <br/>
        <div className = "A">
        <h2>Blood group A</h2>
        <h5>Antigens on red cell: A</h5>
        <h5>Antibodies in plasma: anti-B</h5>
        </div>
        <br/>
        <br/>
        <h2>Blood group B</h2>
        <h5>Antigens on red cell: B</h5>
        <h5>Antibodies in plasma: anti-A</h5>
        <br/>
        <br/>
        <div className = "AB">
        <h2>Blood group AB</h2>
        <h5>Antigens on red cell: A and B</h5>
        <h5>Antibodies in plasma: none</h5>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Positive or negative blood</h2>
        <h5>The D antigen in the Rh system determines whether you have positive or negative blood.</h5>
        <h5>If you have the Rh D antigen, your blood type is positive. If you lack the Rh D antigen, your blood type is negative.</h5>
        <h5>77% of our donors are Rh D positive.</h5>
        <h5>There are four other main antigens in the Rh system. Your combination of these makes up your blood subtype.</h5>


        



    </div>
        )
};


export default Type ;




