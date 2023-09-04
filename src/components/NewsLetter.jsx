import { Button, FormControl, Input, Radio, RadioGroup } from "@mui/joy";
import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold">Subscribe to Our Newsletter!</h2>
      <p className="text-blue-950  leading-10">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="mt-4">
        <FormControl className="space-y-2">
          <Input placeholder="Your Name" variant="outlined" color="primary" 
           />
          <Input placeholder="Land" variant="outlined" color="primary" />
          <Input placeholder="Email" variant="outlined" color="primary" />

          {/* <FormLabel>Your Role As:</FormLabel> */}
          <RadioGroup defaultValue="medium" name="radio-buttons-group">
            <p className="text-blue-950 text-lg font-bold mt-4">Your Role as:</p>
            <Radio label="Referee" value="Referee" variant="soft"/>
            <Radio label="Country Representative" value="cr" variant="soft"/>
            <Radio label="Others" value="others" variant="soft"/>
          </RadioGroup>
          <Button variant="soft" color="neutral">Subscribe</Button>
        </FormControl>
      </div>
    </div>
  );
};

export default NewsLetter;
