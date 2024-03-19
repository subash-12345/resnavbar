import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram ,faFacebookF,faXTwitter} from '@fortawesome/free-brands-svg-icons';



export default function Form() {
  return (
    <div className="TOP">
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Address 2
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            City
          </label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            State
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">
            Zip
          </label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
      <div className="footer">
          <div className="foo">
            <p className="VDart">
© VDart 2024. All Rights Reserved.
Contact Us | Disclaimer | Privacy Policy</p>
          </div>
          <div className="Dart">
          <FontAwesomeIcon icon={faSquareInstagram} size="2xl" style={{color: "#eeeff2",}}  className="inst" />
          <FontAwesomeIcon icon={faFacebookF} size="2xl" style={{color: "#f0f4f9",}} className="facebook"/>
          <FontAwesomeIcon icon={faXTwitter} size="2xl" style={{color: "#f0f2f5",}} className="facebook" />
          </div>
      </div>
    </div>
  );
}
