import "./index.css"
import Icons from "./sprite.svg";

export default function Social() {
  return (
    <ul className="social-list">
      <li className="list-item">
        <button className="social-list-item">
          <svg
            className="social-item-logo"
            width="20px"
            height="20px"
          >
            <use
              href={`${Icons}#icon-instagram`}
            ></use>
          </svg>
        </button>
      </li>
      <li className="list-item">
        <button className="social-list-item">
          <svg
            className="social-item-logo"
            width="20px"
            height="20px"
          >
            <use
              href={`${Icons}#icons-tiktok`}
            />
          </svg>
        </button>
      </li>
      <li className="list-item">
        <button className="social-list-item">
          <svg
            className="social-item-logo"
            width="20px"
            height="20px"
          >
            <use
              href={`${Icons}#icon-facebook`}
            />
          </svg>
        </button>
      </li>
    </ul>
  );
}