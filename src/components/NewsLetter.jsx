import emailjs from "@emailjs/browser";
import {
  Button,
  Input,
  Stack,
  Typography
} from "@mui/joy";
import React, { useRef } from "react";

const NewsLetter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Add the checkbox values to the form data
    const formData = new FormData(form.current);
    formData.append("referee", form.current.elements.referee.checked);
    formData.append("cr", form.current.elements.cr.checked);
    formData.append("others", form.current.elements.others.checked);

    emailjs
      .sendForm(
        "service_6tgi9zy",
        "template_ngh567r",
        form.current,
        "V_vHkacTpJ3QSbc4h"
      )
      .then(
        (result) => {
          alert("Your mail sent successfully!");
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  };  

  return (
    <div className="flex gap-8 justify-center items-center flex-col lg:flex-row">
      <div>
        <h2 className="text-4xl font-semibold">Subscribe to Our Newsletter!</h2>
        <p className="text-blue-950  leading-10">
          Subscribe to our newsletter and stay updated
        </p>
        <div className="mt-4">
          <form ref={form} onSubmit={sendEmail}>
            <Stack spacing={2}>
              <Input
                name="client_name"
                placeholder="Your Name"
                variant="outlined"
                required
              />
              <Input
                name="client_land"
                placeholder="Land"
                variant="outlined"
                required
              />
              <Input
                name="client_email"
                placeholder="Email"
                variant="outlined"
                required
              />
            </Stack>

            <Typography
              id="sandwich-group"
              level="body-sm"
              fontWeight="md"
              fontSize="lg"
              color="white"
              mt={4}
            >
              Your Role As:
            </Typography>

            <input type="checkbox" name="referee" label="Referee" value="referee"/> Referee <br />
            <input type="checkbox" name="cr" label="Referee" value="cr"/> Country Representative <br />
            <input type="checkbox" name="others" label="Referee" value="others"/> Others
            

            <Stack alignItems="center" mt={1}>
              <Button type="submit" variant="soft" color="neutral">
                Subscribe
              </Button>
            </Stack>
          </form>
        </div>
      </div>
      {/* venu google map */}
      <div>
        <iframe
          title="venu map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8991.868223120673!2d9.5180556!3d55.7069444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c825c06efa945%3A0xbea002bd0b4e2a96!2sDGI%20Huset%20Vejle!5e0!3m2!1sen!2sbd!4v1693902257627!5m2!1sen!2sbd"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-xl hover:shadow-lg hover:shadow-blue-300 sm:w-[380px] sm:h-[280px]"
        ></iframe>
      </div>
    </div>
  );
};

export default NewsLetter;
