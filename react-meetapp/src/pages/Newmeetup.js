import { useHistory } from "react-router-dom";
import NewMeetupFrom from "../component/meetups/NewMeetupFrom";

function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-start-c5323-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupFrom onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
