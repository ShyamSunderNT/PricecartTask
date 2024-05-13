// importing React
import React from "react";

const Header = () => {
  return (
    // header section
    <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">I Store </h1>
            <p className="lead fw-normal text-white-50 mb-0">
              The iPhone is a versatile smartphone developed by Apple Inc. It
              combines a sleek design with powerful hardware and a user-friendly
              interface. With access to the App Store, users can customize their
              iPhone with a wide range of applications to suit their needs,
              including productivity tools like the Notes app for jotting down
              quick thoughts or the Reminders app for managing tasks.
              Additionally, features like iCloud integration and synchronization
              across devices ensure that your important information is always
              accessible wherever you go.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
