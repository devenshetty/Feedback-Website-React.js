import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage(){
  return <Card>
    <div className="about">
      <h1>About the app </h1>
      <p> The app is used to store feedbacks. </p>
      <p> Version 1.0 </p>
      <p> <Link to="/"> Back to Home Page </Link></p>
    </div>
  </Card>
}

export default AboutPage;
