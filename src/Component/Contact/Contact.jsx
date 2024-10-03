import React from "react";
import "../Contact/Contact.css";
import one from "../Contact/1.png"
import two from "../Contact/2.png"
import three from "../Contact/3.png"
import four from "../Contact/4.png"
import smith from "../Contact/smith.png"
import map from "../Contact/map.png"


const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="row featurette d-flex align-items-center flex-column-reve flex-md-row">
                        <div className="col-md-6">
                            <h6 className="featurette-heading us">CONTACT US</h6>
                            <br />
                            <h1 className="featurette-heading fw-bold us">Lets Talk</h1>
                            <br />
                            <p className="at">At Orufy Projects, we create AI-powered tools to help your business grow. Reach out to us to see how our technology can make your business better.</p>
                            <br />
                            <div className="calls">
                                <div className="call shadow-sm mb-5 rounded border">
                                    <p className="fs-6"><span><i class="fa-solid fa-phone "></i></span> Call us</p>
                                    <p className="fs-6">+91-8591351048</p>
                                </div>
                                <div className="call shadow-sm mb-5 rounded border">
                                    <p className="fs-6"><span><i class="fa-solid fa-envelope "></i></span> Mail us</p>
                                    <p className="fs-6">support@orufy.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 second-form">
                            <div className="col-md-10">
                                <form className="p-2 p-md-4 shadow-sm p-3 mb-5 bg-body rounded border">
                                    <h4 className="text-center">Get in touch with our expertise  </h4>
                                    <br />
                                    <div class="mb-3 d-flex gap-3">
                                        <input type="text" class="form-control p-2" id="firstName" name="firstName" placeholder="First Name" required />
                                        <input type="text" class="form-control p-2" id="firstName" name="firstName" placeholder="Last Name" required />
                                    </div>

                                    <div class="mb-3">
                                        <input type="text" class="form-control p-2" id="lastName" name="lastName" placeholder="Work Email" required />
                                    </div>
                                    <div class="input-group has-validation">
                                        <span class="input-group-text form-contact">
                                            <select class="form-select " aria-label="Country Select" required>
                                                <option value="IN">🇮🇳 India +91</option>
                                                <option value="AF">🇦🇫 Afghanistan +93</option>
                                                <option value="AL">🇦🇱 Albania +355</option>
                                                <option value="DZ">🇩🇿 Algeria +213</option>
                                                <option value="AS">🇦🇸 American Samoa +1-684</option>
                                                <option value="AD">🇦🇩 Andorra +376</option>
                                                <option value="AO">🇦🇴 Angola +244</option>
                                                <option value="AI">🇦🇮 Anguilla +1-264</option>
                                                <option value="AQ">🇦🇶 Antarctica +672</option>
                                                <option value="AG">🇦🇬 Antigua and Barbuda +1-268</option>
                                                <option value="AR">🇦🇷 Argentina +54</option>
                                                <option value="AM">🇦🇲 Armenia +374</option>
                                                <option value="AW">🇦🇼 Aruba +297</option>
                                                <option value="AU">🇦🇺 Australia +61</option>
                                                <option value="AT">🇦🇹 Austria +43</option>
                                                <option value="AZ">🇦🇿 Azerbaijan +994</option>
                                                <option value="BS">🇧🇸 Bahamas +1-242</option>
                                                <option value="BH">🇧🇭 Bahrain +973</option>
                                                <option value="BD">🇧🇩 Bangladesh +880</option>
                                                <option value="BB">🇧🇧 Barbados +1-246</option>
                                                <option value="BY">🇧🇾 Belarus +375</option>
                                                <option value="BE">🇧🇪 Belgium +32</option>
                                                <option value="BZ">🇧🇿 Belize +501</option>
                                                <option value="BJ">🇧🇯 Benin +229</option>
                                                <option value="BM">🇧🇲 Bermuda +1-441</option>
                                                <option value="BT">🇧🇹 Bhutan +975</option>
                                                <option value="BO">🇧🇴 Bolivia +591</option>
                                                <option value="BQ">🇧🇶 Bonaire, Sint Eustatius and Saba +599</option>
                                                <option value="BA">🇧🇦 Bosnia and Herzegovina +387</option>
                                                <option value="BW">🇧🇼 Botswana +267</option>
                                                <option value="BV">🇧🇻 Bouvet Island +47</option>
                                                <option value="BR">🇧🇷 Brazil +55</option>
                                                <option value="IO">🇮🇴 British Indian Ocean Territory +246</option>
                                                <option value="BN">🇧🇳 Brunei Darussalam +673</option>
                                                <option value="BG">🇧🇬 Bulgaria +359</option>
                                                <option value="BF">🇧🇫 Burkina Faso +226</option>
                                                <option value="BI">🇧🇮 Burundi +257</option>
                                                <option value="CV">🇨🇻 Cabo Verde +238</option>
                                                <option value="KH">🇰🇭 Cambodia +855</option>
                                                <option value="CM">🇨🇲 Cameroon +237</option>
                                                <option value="CA">🇨🇦 Canada +1</option>
                                                <option value="KY">🇰🇾 Cayman Islands +1-345</option>
                                                <option value="CF">🇨🇫 Central African Republic +236</option>
                                                <option value="TD">🇹🇩 Chad +235</option>
                                                <option value="CL">🇨🇱 Chile +56</option>
                                                <option value="CN">🇨🇳 China +86</option>
                                                <option value="CX">🇨🇽 Christmas Island +61</option>
                                                <option value="CC">🇨🇨 Cocos (Keeling) Islands +61</option>
                                                <option value="CO">🇨🇴 Colombia +57</option>
                                                <option value="KM">🇰🇲 Comoros +269</option>
                                                <option value="CD">🇨🇩 Congo (Democratic Republic of the) +243</option>
                                                <option value="CG">🇨🇬 Congo (Republic of the) +242</option>
                                                <option value="CK">🇨🇰 Cook Islands +682</option>
                                                <option value="CR">🇨🇷 Costa Rica +506</option>
                                                <option value="HR">🇭🇷 Croatia +385</option>
                                                <option value="CU">🇨🇺 Cuba +53</option>
                                                <option value="CW">🇨🇼 Curaçao +599</option>
                                                <option value="CY">🇨🇾 Cyprus +357</option>
                                                <option value="CZ">🇨🇿 Czech Republic +420</option>
                                                <option value="DK">🇩🇰 Denmark +45</option>
                                                <option value="DJ">🇩🇯 Djibouti +253</option>
                                                <option value="DM">🇩🇲 Dominica +1-767</option>
                                                <option value="DO">🇩🇴 Dominican Republic +1-809, +1-829, +1-849</option>
                                                <option value="EC">🇪🇨 Ecuador +593</option>
                                                <option value="EG">🇪🇬 Egypt +20</option>
                                                <option value="SV">🇸🇻 El Salvador +503</option>
                                                <option value="GQ">🇬🇶 Equatorial Guinea +240</option>
                                                <option value="ER">🇪🇷 Eritrea +291</option>
                                                <option value="EE">🇪🇪 Estonia +372</option>
                                                <option value="SZ">🇸🇿 Eswatini +268</option>
                                                <option value="ET">🇪🇹 Ethiopia +251</option>
                                                <option value="FK">🇫🇰 Falkland Islands +500</option>
                                                <option value="FO">🇫🇴 Faroe Islands +298</option>
                                                <option value="FJ">🇫🇯 Fiji +679</option>
                                                <option value="FI">🇫🇮 Finland +358</option>
                                                <option value="FR">🇫🇷 France +33</option>
                                                <option value="GF">🇬🇫 French Guiana +594</option>
                                                <option value="PF">🇵🇫 French Polynesia +689</option>
                                                <option value="TF">🇹🇫 French Southern Territories +262</option>
                                                <option value="GA">🇬🇦 Gabon +241</option>
                                                <option value="GM">🇬🇲 Gambia +220</option>
                                                <option value="GE">🇬🇪 Georgia +995</option>
                                                <option value="DE">🇩🇪 Germany +49</option>
                                                <option value="GH">🇬🇭 Ghana +233</option>
                                                <option value="GI">🇬🇮 Gibraltar +350</option>
                                                <option value="GR">🇬🇷 Greece +30</option>
                                                <option value="GL">🇬🇱 Greenland +299</option>
                                                <option value="GD">🇬🇩 Grenada +1-473</option>
                                                <option value="GP">🇬🇵 Guadeloupe +590</option>
                                                <option value="GU">🇬🇺 Guam +1-671</option>
                                                <option value="GT">🇬🇹 Guatemala +502</option>
                                                <option value="GG">🇬🇬 Guernsey +44-1481</option>
                                                <option value="GN">🇬🇳 Guinea +224</option>
                                                <option value="GW">🇬🇼 Guinea-Bissau +245</option>
                                                <option value="GY">🇬🇾 Guyana +592</option>
                                                <option value="HT">🇭🇹 Haiti +509</option>
                                                <option value="HM">🇭🇲 Heard Island and McDonald Islands +61</option>
                                                <option value="VA">🇻🇦 Holy See +379</option>
                                                <option value="HN">🇭🇳 Honduras +504</option>
                                                <option value="HK">🇭🇰 Hong Kong +852</option>
                                                <option value="HU">🇭🇺 Hungary +36</option>
                                                <option value="IS">🇮🇸 Iceland +354</option>
                                                <option value="ID">🇮🇩 Indonesia +62</option>
                                                <option value="IR">🇮🇷 Iran +98</option>
                                                <option value="IQ">🇮🇶 Iraq +964</option>
                                                <option value="IE">🇮🇪 Ireland +353</option>
                                                <option value="IM">🇮🇲 Isle of Man +44-1624</option>
                                                <option value="IL">🇮🇱 Israel +972</option>
                                                <option value="IT">🇮🇹 Italy +39</option>
                                                <option value="JM">🇯🇲 Jamaica +1-876</option>
                                                <option value="JP">🇯🇵 Japan +81</option>
                                                <option value="JE">🇯🇪 Jersey +44-1534</option>
                                                <option value="JO">🇯🇴 Jordan +962</option>
                                                <option value="KZ">🇰🇿 Kazakhstan +7</option>
                                                <option value="KE">🇰🇪 Kenya +254</option>
                                                <option value="KI">🇰🇮 Kiribati +686</option>
                                                <option value="KP">🇰🇵 Korea (North) +850</option>
                                                <option value="KR">🇰🇷 Korea (South) +82</option>
                                                <option value="KW">🇰🇼 Kuwait +965</option>
                                                <option value="KG">🇰🇬 Kyrgyzstan +996</option>
                                                <option value="LA">🇱🇦 Laos +856</option>
                                                <option value="LV">🇱🇻 Latvia +371</option>
                                                <option value="LB">🇱🇧 Lebanon +961</option>
                                                <option value="LS">🇱🇸 Lesotho +266</option>
                                                <option value="LR">🇱🇷 Liberia +231</option>
                                                <option value="LY">🇱🇾 Libya +218</option>
                                                <option value="LI">🇱🇮 Liechtenstein +423</option>
                                                <option value="LT">🇱🇹 Lithuania +370</option>
                                                <option value="LU">🇱🇺 Luxembourg +352</option>
                                                <option value="MO">🇲🇴 Macau +853</option>
                                                <option value="MG">🇲🇬 Madagascar +261</option>
                                                <option value="MW">🇲🇼 Malawi +265</option>
                                                <option value="MY">🇲🇾 Malaysia +60</option>
                                                <option value="MV">🇲🇻 Maldives +960</option>
                                                <option value="ML">🇲🇱 Mali +223</option>
                                                <option value="MT">🇲🇹 Malta +356</option>
                                                <option value="MH">🇲🇭 Marshall Islands +692</option>
                                                <option value="MQ">🇲🇶 Martinique +596</option>
                                                <option value="MR">🇲🇷 Mauritania +222</option>
                                                <option value="MU">🇲🇺 Mauritius +230</option>
                                                <option value="YT">🇾🇹 Mayotte +262</option>
                                                <option value="MX">🇲🇽 Mexico +52</option>
                                                <option value="FM">🇫🇲 Micronesia +691</option>
                                                <option value="MD">🇲🇩 Moldova +373</option>
                                                <option value="MC">🇲🇨 Monaco +377</option>
                                                <option value="MN">🇲🇳 Mongolia +976</option>
                                                <option value="ME">🇲🇪 Montenegro +382</option>
                                                <option value="MS">🇲🇸 Montserrat +1-664</option>
                                                <option value="MA">🇲🇦 Morocco +212</option>
                                                <option value="MZ">🇲🇿 Mozambique +258</option>
                                                <option value="MM">🇲🇲 Myanmar +95</option>
                                                <option value="NA">🇳🇦 Namibia +264</option>
                                                <option value="NR">🇳🇷 Nauru +674</option>
                                                <option value="NP">🇳🇵 Nepal +977</option>
                                                <option value="NL">🇳🇱 Netherlands +31</option>
                                                <option value="NC">🇳🇨 New Caledonia +687</option>
                                                <option value="NZ">🇳🇿 New Zealand +64</option>
                                                <option value="NI">🇳🇮 Nicaragua +505</option>
                                                <option value="NE">🇳🇪 Niger +227</option>
                                                <option value="NG">🇳🇬 Nigeria +234</option>
                                                <option value="NU">🇳🇺 Niue +683</option>
                                                <option value="NF">🇳🇫 Norfolk Island +672</option>
                                                <option value="MP">🇲🇵 Northern Mariana Islands +1-670</option>
                                                <option value="NO">🇳🇴 Norway +47</option>
                                                <option value="OM">🇴🇲 Oman +968</option>
                                                <option value="PK">🇵🇰 Pakistan +92</option>
                                                <option value="PW">🇵🇼 Palau +680</option>
                                                <option value="PS">🇵🇸 Palestine +970</option>
                                                <option value="PA">🇵🇦 Panama +507</option>
                                                <option value="PG">🇵🇬 Papua New Guinea +675</option>
                                                <option value="PY">🇵🇾 Paraguay +595</option>
                                                <option value="PE">🇵🇪 Peru +51</option>
                                                <option value="PH">🇵🇭 Philippines +63</option>
                                                <option value="PN">🇵🇳 Pitcairn +64</option>
                                                <option value="PL">🇵🇱 Poland +48</option>
                                                <option value="PT">🇵🇹 Portugal +351</option>
                                                <option value="PR">🇵🇷 Puerto Rico +1-787, +1-939</option>
                                                <option value="QA">🇶🇦 Qatar +974</option>
                                                <option value="RE">🇷🇪 Réunion +262</option>
                                                <option value="RO">🇷🇴 Romania +40</option>
                                                <option value="RU">🇷🇺 Russia +7</option>
                                                <option value="RW">🇷🇼 Rwanda +250</option>
                                                <option value="BL">🇧🇱 Saint Barthélemy +590</option>
                                                <option value="KN">🇰🇳 Saint Kitts and Nevis +1-869</option>
                                                <option value="LC">🇱🇨 Saint Lucia +1-758</option>
                                                <option value="MF">🇲🇫 Saint Martin (French part) +590</option>
                                                <option value="PM">🇵🇲 Saint Pierre and Miquelon +508</option>
                                                <option value="VC">🇻🇨 Saint Vincent and the Grenadines +1-784</option>
                                                <option value="WS">🇼🇸 Samoa +685</option>
                                                <option value="SM">🇸🇲 San Marino +378</option>
                                                <option value="ST">🇸🇹 São Tomé and Príncipe +239</option>
                                                <option value="SA">🇸🇦 Saudi Arabia +966</option>
                                                <option value="SN">🇸🇳 Senegal +221</option>
                                                <option value="RS">🇷🇸 Serbia +381</option>
                                                <option value="SC">🇸🇨 Seychelles +248</option>
                                                <option value="SL">🇸🇱 Sierra Leone +232</option>
                                                <option value="SG">🇸🇬 Singapore +65</option>
                                                <option value="SX">🇸🇽 Sint Maarten (Dutch part) +1-721</option>
                                                <option value="SK">🇸🇰 Slovakia +421</option>
                                                <option value="SI">🇸🇮 Slovenia +386</option>
                                                <option value="SB">🇸🇧 Solomon Islands +677</option>
                                                <option value="SO">🇸🇴 Somalia +252</option>
                                                <option value="ZA">🇿🇦 South Africa +27</option>
                                                <option value="GS">🇬🇸 South Georgia and the South Sandwich Islands +500</option>
                                                <option value="SS">🇸🇸 South Sudan +211</option>
                                                <option value="ES">🇪🇸 Spain +34</option>
                                                <option value="LK">🇱🇰 Sri Lanka +94</option>
                                                <option value="SD">🇸🇩 Sudan +249</option>
                                                <option value="SR">🇸🇷 Suriname +597</option>
                                                <option value="SJ">🇸🇯 Svalbard and Jan Mayen +47</option>
                                                <option value="SZ">🇸🇿 Swaziland +268</option>
                                                <option value="SE">🇸🇪 Sweden +46</option>
                                                <option value="CH">🇨🇭 Switzerland +41</option>
                                                <option value="SY">🇸🇾 Syria +963</option>
                                                <option value="TW">🇹🇼 Taiwan +886</option>
                                                <option value="TJ">🇹🇯 Tajikistan +992</option>
                                                <option value="TZ">🇹🇿 Tanzania +255</option>
                                                <option value="TH">🇹🇭 Thailand +66</option>
                                                <option value="TL">🇹🇱 Timor-Leste +670</option>
                                                <option value="TG">🇹🇬 Togo +228</option>
                                                <option value="TK">🇹🇰 Tokelau +690</option>
                                                <option value="TO">🇹🇴 Tonga +676</option>
                                                <option value="TT">🇹🇹 Trinidad and Tobago +1-868</option>
                                                <option value="TN">🇹🇳 Tunisia +216</option>
                                                <option value="TR">🇹🇷 Turkey +90</option>
                                                <option value="TM">🇹🇲 Turkmenistan +993</option>
                                                <option value="TC">🇹🇨 Turks and Caicos Islands +1-649</option>
                                                <option value="TV">🇹🇻 Tuvalu +688</option>
                                                <option value="UG">🇺🇬 Uganda +256</option>
                                                <option value="UA">🇺🇦 Ukraine +380</option>
                                                <option value="AE">🇦🇪 United Arab Emirates +971</option>
                                                <option value="GB">🇬🇧 United Kingdom +44</option>
                                                <option value="US">🇺🇸 United States +1</option>
                                                <option value="UM">🇺🇲 United States Minor Outlying Islands +1</option>
                                                <option value="UY">🇺🇾 Uruguay +598</option>
                                                <option value="UZ">🇺🇿 Uzbekistan +998</option>
                                                <option value="VU">🇻🇺 Vanuatu +678</option>
                                                <option value="VE">🇻🇪 Venezuela +58</option>
                                                <option value="VN">🇻🇳 Vietnam +84</option>
                                                <option value="VG">🇻🇬 Virgin Islands (British) +1-284</option>
                                                <option value="VI">🇻🇮 Virgin Islands (U.S.) +1-340</option>
                                                <option value="WF">🇼🇫 Wallis and Futuna +681</option>
                                                <option value="EH">🇪🇭 Western Sahara +212</option>
                                                <option value="YE">🇾🇪 Yemen +967</option>
                                                <option value="ZM">🇿🇲 Zambia +260</option>
                                                <option value="ZW">🇿🇼 Zimbabwe +263</option>

                                            </select>

                                        </span>
                                        <input type="text" class="form-control p-2" id="username" placeholder="Mobile Number" required="" />
                                        <div class="invalid-feedback">
                                            Your mobile number is required.
                                        </div>
                                    </div>
                                    <br />
                                    <div class="mb-3">
                                        <input type="text" class="form-control p-2" id="lastName" name="lastName" placeholder="Company Name" required />
                                    </div>
                                    <div class="mb-3">
                                        <input type="text" class="form-control p-2" id="lastName" name="lastName" placeholder="Message (optional)" required />
                                    </div>
                                    <button className="w-100 primary" type="submit">Send message</button>
                                    <hr className="my-4" />
                                    <small className="text-muted text-center">By filling this form you are granting the permission to share your details with Orufy Connect.</small>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* visit */}

            <h1 className="text-center fw-bold mt-5">Visit our help center for technical support</h1>
            <br />
            <div className="container">
                <div class="row gap-3 helps py-5 row-cols-md-2 row-cols-lg-4">
                    <div class="feature col shadow  mb-5 bg-body rounded help">
                        <div class="feature-icon d-flex align-items-center justify-content-center fs-2 mb-3">
                            <img src={one} class="bi" width="53rem" height="53rem" alt="" />
                        </div>
                        <h4 class="fs-4 text-center">Connect</h4>
                        <br />
                        <p class="text-center">Boost customer support with AI driven chatbot</p>
                        <div class="d-flex align-items-center justify-content-center">
                            <button type="button" class="btn btn-outline-primary custom-btn">Go to Help Centre</button>
                        </div>
                    </div>
                    <div class="feature col shadow mb-5 bg-body rounded help">
                        <div class="feature-icon d-flex align-items-center justify-content-center fs-2 mb-3">
                            <img src={two} class="bi" width="53rem" height="53rem" alt="" />
                        </div>
                        <h4 class="fs-4 text-center">Webtonative</h4>
                        <br />
                        <p class="text-center">Convert your website into mobile app in few mins</p>
                        <div class="d-flex align-items-center justify-content-center">
                            <button type="button" class="btn btn-outline-primary custom-btn">Go to Help Centre</button>
                        </div>
                    </div>
                    <div class="feature col shadow mb-5 bg-body rounded help">
                        <div class="feature-icon d-flex align-items-center justify-content-center fs-2 mb-3">
                            <img src={three} class="bi" width="53rem" height="53rem" alt="" />
                        </div>
                        <h4 class="fs-4 text-center">Bookings</h4>
                        <br />
                        <p class="text-center">Schedule your meeting in just one click</p>
                        <div class="d-flex align-items-center justify-content-center">
                            <button type="button" class="btn btn-outline-primary custom-btn">Go to Help Centre</button>
                        </div>
                    </div>
                    <div class="feature col shadow mb-5 bg-body rounded help">
                        <div class="feature-icon d-flex align-items-center justify-content-center fs-2 mb-3">
                            <img src={four} class="bi" width="53rem" height="53rem" alt="" />
                        </div>
                        <h4 class="fs-4 text-center">Projects</h4>
                        <br />
                        <p class="text-center">Manage your workflows and task easily</p>
                        <div class="d-flex align-items-center justify-content-center">
                            <button type="button" class="btn btn-outline-primary custom-btn">Go to Help Centre</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Sales Team */}

            <div className="container">
                <div class="row featurette d-flex align-items-center chat-1">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-bold connect">Connect with Our Sales Team</h2>
                        <br />
                        <p class="lead">Chat with our friendly Sales Team anytime! We're here to help you find the perfect solutions for your business.</p>
                        <br />
                        <div className="abs">
                            <button type="button" class="btn btn-primarys">Talk to us</button>
                        </div>
                    </div>
                    <div class="col-md-5 order-md-2 chat-2">
                        <img src={smith} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid custom-img" alt="" />
                    </div>
                    <p class="leads">Chat with our friendly Sales Team anytime! We're here to help you find the perfect solutions for your business.</p>
                    <br />
                </div>
            </div>

            {/* Head quarter */}
            <h1 className="text-center fw-bold mt-5">Our Offices</h1>
            <br />
            <div className="container">
                <div class="row row-cols-1 row-cols-md-2 mb-3">
                    <div class="col first-location">
                        <div class="offices mb-4">
                            <div class="card-header py-3">
                                <h5 class="my-0 "><i class="fa-solid fa-location-dot location fs-3"></i></h5>
                            </div>
                            <div class="">
                                <h4 class="card-title pricing-card-title mt-3 fw-bold">Headquater Address</h4>
                                <h5 class="card-title pricing-card-title mt-3 fw-bold">Orufy Technologies Private Limited</h5>
                                <ul class="list-unstyled mt-1 mb-4">
                                        <li className="private">Orufy Technologies Private Limited F1 - First floor, Gulab Tower, C-134, Near global heart hostpital, Vaishali Nagar Jaipur - 302021, Rajasthan, India</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="offices mb-4">
                                <div class="card-header py-3">
                                    <h5 class="my-0 "><i class="fa-solid fa-location-dot location fs-3"></i></h5>
                                </div>
                                <div class="">
                                    <h4 class="card-title pricing-card-title mt-3 fw-bold">Registered Address</h4>
                                    <h5 class="card-title pricing-card-title mt-3 fw-bold">Orufy Technologies Private Limited</h5>
                                    <ul class="list-unstyled mt-1 mb-4">
                                        <li className="private">Orufy Technologies Private Limited F1 - First floor, Gulab Tower, C-134, Near global heart hostpital, Vaishali Nagar Jaipur - 302021, Rajasthan, India</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            {/* Direction */}
            <div className="container">
                <div className="direction">
                    <button type="button" class="btn btn-primarys">Get Direction</button>
                </div>
            </div>
            <img src={map} className="map" alt="" />
        </>
    );
};


export default Contact;