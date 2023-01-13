import TragedyData from "./TragedyData";
import "./TragedyStyles.css";
import img1 from "../assets/2.png";
function Tragedy() {
  return (
    <>
      <div className="tragedy">
        <h1>Recent Tragedy</h1>
        <p>
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content. Lorem ipsum may be used as a placeholder before final copy is
          available
        </p>
      </div>
      <div className="tragedycard">
        <TragedyData
          heading="Help To Provide Shelter"
          text="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNgSeW4W09l7HsuoVuQjhcxwohfsBtDYOA3bfG6EIQvPH7d9D89kvCIITNVPsdiQUfYEc&usqp=CAU"
        />
        <TragedyData
          heading="Help for Health Operation"
          text="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWk5PKRoqaXbosXuuQ2hX_9Ck_JxWEuf1orw&usqp=CAU"
        />
        <TragedyData
          heading="Help To Educate"
          text="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNgSeW4W09l7HsuoVuQjhcxwohfsBtDYOA3bfG6EIQvPH7d9D89kvCIITNVPsdiQUfYEc&usqp=CAU"
        />
      </div>
      <div className="btn1"> <a href="">Donate</a></div>
    </>
  );
}

export default Tragedy;
