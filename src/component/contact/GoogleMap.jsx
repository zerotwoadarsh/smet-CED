import React from "react";

function GoogleMap() {
    return (
        <div className="google-map flex justify-center h-full rounded-md"   >
            <iframe
                title={"NIT-KKR"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13828.675043139203!2d76.80626880664013!3d29.94582404957092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3f51bab18cb5%3A0x96200205143e35f6!2sNIT%2C%20Thanesar%2C%20Haryana%20136119!5e0!3m2!1sen!2sin!4v1710228156244!5m2!1sen!2sin"
                height=""
                style={{ height: '100%', width: '100%' }}
                allowFullScreen=""
                loading="lazy"
            />
        </div>
    );
}

export default GoogleMap;
