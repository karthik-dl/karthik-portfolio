import React from "react";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "31770cd8-30f8-4974-8968-ec12574774a7"); 

    const data = Object.fromEntries(formData);
    const jsonData = JSON.stringify(data);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: jsonData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        event.target.reset();
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text caret-blue-900 font-[700] text-[1.5rem] mb-8">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          {/* Google Map */}
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089970882!2d77.46612549485897!3d12.953945613736225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1749708884091!5m2!1sen!2sin"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] flex items-center justify-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form
              onSubmit={onSubmit}
              className="w-full flex flex-col gap-y-5 ml-2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                required
                className="w-full p-3 rounded-[5px] bg-white text-gray-900"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                className="w-full p-3 rounded-[5px] bg-white text-gray-900"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3 rounded-[5px] bg-white text-gray-900"
              />

              <textarea
                name="message"
                rows={3}
                placeholder="Write your message"
                required
                className="w-full p-3 rounded-[5px] bg-white text-gray-900"
              ></textarea>

              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white hover:bg-blue-400 rounded-[5px]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
