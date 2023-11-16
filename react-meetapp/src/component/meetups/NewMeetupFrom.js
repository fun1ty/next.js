import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupFrom(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enterImage = imageInputRef.current.value;
    const entetedAddress = addressInputRef.current.value;
    const eneteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      Image: enterImage,
      address: entetedAddress,
      description: eneteredDescription,
    };

    console.log(meetupData);

    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            required
            id="description"
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.action}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupFrom;
