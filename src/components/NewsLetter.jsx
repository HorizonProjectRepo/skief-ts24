import {
  Button,
  Checkbox,
  FormControl,
  Input,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/joy";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex gap-8 justify-center items-center flex-col lg:flex-row">
      <div>
        <h2 className="text-4xl font-semibold">Subscribe to Our Newsletter!</h2>
        <p className="text-blue-950  leading-10">
          Subscribe to our newsletter and stay updated
        </p>
        <div className="mt-4">
          <FormControl>
            <Stack spacing={2}>
              <Input placeholder="Your Name" variant="outlined" />
              <Input placeholder="Land" variant="outlined" />
              <Input placeholder="Email" variant="outlined" />
            </Stack>

            {/* <FormLabel>Your Role As:</FormLabel> */}
            {/* <RadioGroup defaultValue="medium" name="radio-buttons-group">
            <p className="text-blue-950 text-lg font-bold mt-4">
              Your Role as:
            </p>
            <Radio label="Referee" value="Referee" variant="soft" />
            <Radio label="Country Representative" value="cr" variant="soft" />
            <Radio label="Others" value="others" variant="soft" />
          </RadioGroup> */}

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
            <div role="group" aria-labelledby="sandwich-group">
              <List size="sm">
                <ListItem>
                  <Checkbox label="Referee" color="primary" variant="soft" 
                  style={{color:"rgb(23 37 84)", fontWeight:"500"}}
                  />
                </ListItem>
                <ListItem>
                  <Checkbox
                    label="Country Representative"
                    color="primary"
                    variant="soft"
                    style={{color:"rgb(23 37 84)", fontWeight:"500"}}
                  />
                </ListItem>
                <ListItem>
                  <Checkbox label="Others" color="primary" variant="soft" 
                  style={{color:"rgb(23 37 84)",fontWeight:"500"}}
                  />
                </ListItem>
              </List>
            </div>
            <Stack alignItems="center" mt={1}>
              <Button variant="soft" color="neutral">
                Subscribe
              </Button>
            </Stack>
          </FormControl>
        </div>
      </div>
      {/* venu google map */}
      <div>
        <iframe
          title="venu map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8991.868223120673!2d9.5180556!3d55.7069444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c825c06efa945%3A0xbea002bd0b4e2a96!2sDGI%20Huset%20Vejle!5e0!3m2!1sen!2sbd!4v1693902257627!5m2!1sen!2sbd"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade" className="rounded-xl hover:shadow-lg hover:shadow-blue-300 sm:w-[380px] sm:h-[280px]"
        ></iframe>
      </div>
    </div>
  );
};

export default NewsLetter;
