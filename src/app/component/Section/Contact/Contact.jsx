"use client";

function Contact({ dictionary }) {
  return (
    <div>
      <h2 className="text-xl text-center">{dictionary.contact.description}</h2>
      <div className="flex flex-col mt-10 justify-center items-center">
        <span>{dictionary.contact.address}</span>
        <span>{dictionary.contact.phone}</span>
      </div>
    </div>
  );
}

export default Contact;
