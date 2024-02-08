import React from 'react';
import submissionBanner from "../../assets/images/submissionBanner.png"

const Submission = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: 'white', color: 'black' }}>
            <img
                src={submissionBanner}
                alt="Submission Image"
                style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
            />
            <div style={{  padding: '0 10%', textAlign: 'left' }} >
            <p className=' font-bold text-4xl text-center my-10 '>Submissions</p>
                <p className=' text-justify pb-10'>
                    Faculty members/research scholars/ scientists from India and abroad are invited to submit original unpublished research on the topics related to the conference. Research papers should present novel perspectives within the general scope of the conference. Literature reviews/survey papers will only be considered if they present a new perspective or clear benefit to the field and define the field in a new way or highlight exciting new technologies or areas of research.
                    The manuscript must adhere to the conference template format. The conference paper template is available on the conference website (website address). The papers received will be peer-reviewed before being accepted for presentation.
                    The registered and presented papers would be submitted for publication in Scopus indexed proceedings or special issues with or without APC. The same would be updated on conference website.
                </p>
            </div>
        </div>
    );
};

export default Submission;
