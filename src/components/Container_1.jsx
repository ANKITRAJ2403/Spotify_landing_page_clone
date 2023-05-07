import "./Container_1.css";
import Button from "./Button";

function Container_1() {
  return (
    <div id="container-1-body">
      <div className="image-container">
        <svg
          viewBox="0 0 290 590.58"
          aria-hidden="true"
          focusable="false"
          class="phone-image"
        >
          <path
            d="M36.28,0H253.72A36.28,36.28,0,0,1,290,36.27v518a36.28,36.28,0,0,1-36.28,36.27H36.28A36.28,36.28,0,0,1,0,554.31v-518A36.28,36.28,0,0,1,36.28,0Z"
            fill="#fff"
          ></path>
          <path
            d="M125,25h40a3,3,0,0,1,0,6H125a3,3,0,0,1,0-6Z"
            fill="#231f20"
          ></path>
        </svg>
        <div className="spotify-image">
          <img
            src="https://i.scdn.co/image/ab678e040000ed3aed58911aecc6dbc16949f40b"
            alt="spotify image"
          />
        </div>
      </div>
      <div className="container-1-heading">
        <h1>Play millions of songs and podcasts, for free.</h1>
        <div className="btn">
        <Button/>
        </div>
        
      </div>
    </div>
  );
}
export default Container_1;
