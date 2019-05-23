import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import {
  Form, Input, Select, Button, Typography,Alert
} from 'antd';
import {registerBusiness} from '../../redux/actions/vendorActions';
const { Option } = Select;
const { Text } = Typography;
const { TextArea } = Input;

class VendorSalesPage extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    values: {

    },
    msg:  ''
  };
  componentDidUpdate(prevProps,prevState){
    const values = this.state.values;
    if(values !== prevState.values){
      const promiseFunction = new Promise((resolve, reject) => {
        
        resolve(this.props.registerBusiness(values));
      });
      promiseFunction.then((response) => {
        const {error} = this.props;
        console.log(error);
      // if(error.id === "REGISTER_BUSINESS_FAIL"){
      //   this.setState({
      //     msg : error.msg
      //   });
      // } else{
      //   this.setState({
      //     msg : null
      //   });
      // }
      })
      
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({ values: values })
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  onChange = (value) => {
    console.log(value);
  }


  render() {
    const { isAuthenticated, user } = this.props;
    const { msg} = this.state;
    if (isAuthenticated && user.isVendor === true) {
      const { getFieldDecorator } = this.props.form;

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '213',
      })(
        <Select>
    <Option data-countryCode="DZ" value="213">Algeria (+213)</Option>
		<Option data-countryCode="AD" value="376">Andorra (+376)</Option>
		<Option data-countryCode="AO" value="244">Angola (+244)</Option>
		<Option data-countryCode="AI" value="1264">Anguilla (+1264)</Option>
		<Option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</Option>
		<Option data-countryCode="AR" value="54">Argentina (+54)</Option>
		<Option data-countryCode="AM" value="374">Armenia (+374)</Option>
		<Option data-countryCode="AW" value="297">Aruba (+297)</Option>
		<Option data-countryCode="AU" value="61">Australia (+61)</Option>
		<Option data-countryCode="AT" value="43">Austria (+43)</Option>
		<Option data-countryCode="AZ" value="994">Azerbaijan (+994)</Option>
		<Option data-countryCode="BS" value="1242">Bahamas (+1242)</Option>
		<Option data-countryCode="BH" value="973">Bahrain (+973)</Option>
		<Option data-countryCode="BD" value="880">Bangladesh (+880)</Option>
		<Option data-countryCode="BB" value="1246">Barbados (+1246)</Option>
		<Option data-countryCode="BY" value="375">Belarus (+375)</Option>
		<Option data-countryCode="BE" value="32">Belgium (+32)</Option>
		<Option data-countryCode="BZ" value="501">Belize (+501)</Option>
		<Option data-countryCode="BJ" value="229">Benin (+229)</Option>
		<Option data-countryCode="BM" value="1441">Bermuda (+1441)</Option>
		<Option data-countryCode="BT" value="975">Bhutan (+975)</Option>
		<Option data-countryCode="BO" value="591">Bolivia (+591)</Option>
		<Option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</Option>
		<Option data-countryCode="BW" value="267">Botswana (+267)</Option>
		<Option data-countryCode="BR" value="55">Brazil (+55)</Option>
		<Option data-countryCode="BN" value="673">Brunei (+673)</Option>
		<Option data-countryCode="BG" value="359">Bulgaria (+359)</Option>
		<Option data-countryCode="BF" value="226">Burkina Faso (+226)</Option>
		<Option data-countryCode="BI" value="257">Burundi (+257)</Option>
		<Option data-countryCode="KH" value="855">Cambodia (+855)</Option>
		<Option data-countryCode="CM" value="237">Cameroon (+237)</Option>
		<Option data-countryCode="CA" value="1">Canada (+1)</Option>
		<Option data-countryCode="CV" value="238">Cape Verde Islands (+238)</Option>
		<Option data-countryCode="KY" value="1345">Cayman Islands (+1345)</Option>
		<Option data-countryCode="CF" value="236">Central African Republic (+236)</Option>
		<Option data-countryCode="CL" value="56">Chile (+56)</Option>
		<Option data-countryCode="CN" value="86">China (+86)</Option>
		<Option data-countryCode="CO" value="57">Colombia (+57)</Option>
		<Option data-countryCode="KM" value="269">Comoros (+269)</Option>
		<Option data-countryCode="CG" value="242">Congo (+242)</Option>
		<Option data-countryCode="CK" value="682">Cook Islands (+682)</Option>
		<Option data-countryCode="CR" value="506">Costa Rica (+506)</Option>
		<Option data-countryCode="HR" value="385">Croatia (+385)</Option>
		<Option data-countryCode="CU" value="53">Cuba (+53)</Option>
		<Option data-countryCode="CY" value="90392">Cyprus North (+90392)</Option>
		<Option data-countryCode="CY" value="357">Cyprus South (+357)</Option>
		<Option data-countryCode="CZ" value="42">Czech Republic (+42)</Option>
		<Option data-countryCode="DK" value="45">Denmark (+45)</Option>
		<Option data-countryCode="DJ" value="253">Djibouti (+253)</Option>
		<Option data-countryCode="DM" value="1809">Dominica (+1809)</Option>
		<Option data-countryCode="DO" value="1809">Dominican Republic (+1809)</Option>
		<Option data-countryCode="EC" value="593">Ecuador (+593)</Option>
		<Option data-countryCode="EG" value="20">Egypt (+20)</Option>
		<Option data-countryCode="SV" value="503">El Salvador (+503)</Option>
		<Option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</Option>
		<Option data-countryCode="ER" value="291">Eritrea (+291)</Option>
		<Option data-countryCode="EE" value="372">Estonia (+372)</Option>
		<Option data-countryCode="ET" value="251">Ethiopia (+251)</Option>
		<Option data-countryCode="FK" value="500">Falkland Islands (+500)</Option>
		<Option data-countryCode="FO" value="298">Faroe Islands (+298)</Option>
		<Option data-countryCode="FJ" value="679">Fiji (+679)</Option>
		<Option data-countryCode="FI" value="358">Finland (+358)</Option>
		<Option data-countryCode="FR" value="33">France (+33)</Option>
		<Option data-countryCode="GF" value="594">French Guiana (+594)</Option>
		<Option data-countryCode="PF" value="689">French Polynesia (+689)</Option>
		<Option data-countryCode="GA" value="241">Gabon (+241)</Option>
		<Option data-countryCode="GM" value="220">Gambia (+220)</Option>
		<Option data-countryCode="GE" value="7880">Georgia (+7880)</Option>
		<Option data-countryCode="DE" value="49">Germany (+49)</Option>
		<Option data-countryCode="GH" value="233">Ghana (+233)</Option>
		<Option data-countryCode="GI" value="350">Gibraltar (+350)</Option>
		<Option data-countryCode="GR" value="30">Greece (+30)</Option>
		<Option data-countryCode="GL" value="299">Greenland (+299)</Option>
		<Option data-countryCode="GD" value="1473">Grenada (+1473)</Option>
		<Option data-countryCode="GP" value="590">Guadeloupe (+590)</Option>
		<Option data-countryCode="GU" value="671">Guam (+671)</Option>
		<Option data-countryCode="GT" value="502">Guatemala (+502)</Option>
		<Option data-countryCode="GN" value="224">Guinea (+224)</Option>
		<Option data-countryCode="GW" value="245">Guinea - Bissau (+245)</Option>
		<Option data-countryCode="GY" value="592">Guyana (+592)</Option>
		<Option data-countryCode="HT" value="509">Haiti (+509)</Option>
		<Option data-countryCode="HN" value="504">Honduras (+504)</Option>
		<Option data-countryCode="HK" value="852">Hong Kong (+852)</Option>
		<Option data-countryCode="HU" value="36">Hungary (+36)</Option>
		<Option data-countryCode="IS" value="354">Iceland (+354)</Option>
		<Option data-countryCode="IN" value="91">India (+91)</Option>
		<Option data-countryCode="ID" value="62">Indonesia (+62)</Option>
		<Option data-countryCode="IR" value="98">Iran (+98)</Option>
		<Option data-countryCode="IQ" value="964">Iraq (+964)</Option>
		<Option data-countryCode="IE" value="353">Ireland (+353)</Option>
		<Option data-countryCode="IL" value="972">Israel (+972)</Option>
		<Option data-countryCode="IT" value="39">Italy (+39)</Option>
		<Option data-countryCode="JM" value="1876">Jamaica (+1876)</Option>
		<Option data-countryCode="JP" value="81">Japan (+81)</Option>
		<Option data-countryCode="JO" value="962">Jordan (+962)</Option>
		<Option data-countryCode="KZ" value="7">Kazakhstan (+7)</Option>
		<Option data-countryCode="KE" value="254">Kenya (+254)</Option>
		<Option data-countryCode="KI" value="686">Kiribati (+686)</Option>
		<Option data-countryCode="KP" value="850">Korea North (+850)</Option>
		<Option data-countryCode="KR" value="82">Korea South (+82)</Option>
		<Option data-countryCode="KW" value="965">Kuwait (+965)</Option>
		<Option data-countryCode="KG" value="996">Kyrgyzstan (+996)</Option>
		<Option data-countryCode="LA" value="856">Laos (+856)</Option>
		<Option data-countryCode="LV" value="371">Latvia (+371)</Option>
		<Option data-countryCode="LB" value="961">Lebanon (+961)</Option>
		<Option data-countryCode="LS" value="266">Lesotho (+266)</Option>
		<Option data-countryCode="LR" value="231">Liberia (+231)</Option>
		<Option data-countryCode="LY" value="218">Libya (+218)</Option>
		<Option data-countryCode="LI" value="417">Liechtenstein (+417)</Option>
		<Option data-countryCode="LT" value="370">Lithuania (+370)</Option>
		<Option data-countryCode="LU" value="352">Luxembourg (+352)</Option>
		<Option data-countryCode="MO" value="853">Macao (+853)</Option>
		<Option data-countryCode="MK" value="389">Macedonia (+389)</Option>
		<Option data-countryCode="MG" value="261">Madagascar (+261)</Option>
		<Option data-countryCode="MW" value="265">Malawi (+265)</Option>
		<Option data-countryCode="MY" value="60">Malaysia (+60)</Option>
		<Option data-countryCode="MV" value="960">Maldives (+960)</Option>
		<Option data-countryCode="ML" value="223">Mali (+223)</Option>
		<Option data-countryCode="MT" value="356">Malta (+356)</Option>
		<Option data-countryCode="MH" value="692">Marshall Islands (+692)</Option>
		<Option data-countryCode="MQ" value="596">Martinique (+596)</Option>
		<Option data-countryCode="MR" value="222">Mauritania (+222)</Option>
		<Option data-countryCode="YT" value="269">Mayotte (+269)</Option>
		<Option data-countryCode="MX" value="52">Mexico (+52)</Option>
		<Option data-countryCode="FM" value="691">Micronesia (+691)</Option>
		<Option data-countryCode="MD" value="373">Moldova (+373)</Option>
		<Option data-countryCode="MC" value="377">Monaco (+377)</Option>
		<Option data-countryCode="MN" value="976">Mongolia (+976)</Option>
		<Option data-countryCode="MS" value="1664">Montserrat (+1664)</Option>
		<Option data-countryCode="MA" value="212">Morocco (+212)</Option>
		<Option data-countryCode="MZ" value="258">Mozambique (+258)</Option>
		<Option data-countryCode="MN" value="95">Myanmar (+95)</Option>
		<Option data-countryCode="NA" value="264">Namibia (+264)</Option>
		<Option data-countryCode="NR" value="674">Nauru (+674)</Option>
		<Option data-countryCode="NP" value="977">Nepal (+977)</Option>
		<Option data-countryCode="NL" value="31">Netherlands (+31)</Option>
		<Option data-countryCode="NC" value="687">New Caledonia (+687)</Option>
		<Option data-countryCode="NZ" value="64">New Zealand (+64)</Option>
		<Option data-countryCode="NI" value="505">Nicaragua (+505)</Option>
		<Option data-countryCode="NE" value="227">Niger (+227)</Option>
		<Option data-countryCode="NG" value="234">Nigeria (+234)</Option>
		<Option data-countryCode="NU" value="683">Niue (+683)</Option>
		<Option data-countryCode="NF" value="672">Norfolk Islands (+672)</Option>
		<Option data-countryCode="NP" value="670">Northern Marianas (+670)</Option>
		<Option data-countryCode="NO" value="47">Norway (+47)</Option>
		<Option data-countryCode="OM" value="968">Oman (+968)</Option>
		<Option data-countryCode="PW" value="680">Palau (+680)</Option>
		<Option data-countryCode="PA" value="507">Panama (+507)</Option>
		<Option data-countryCode="PG" value="675">Papua New Guinea (+675)</Option>
		<Option data-countryCode="PY" value="595">Paraguay (+595)</Option>
		<Option data-countryCode="PE" value="51">Peru (+51)</Option>
		<Option data-countryCode="PH" value="63">Philippines (+63)</Option>
		<Option data-countryCode="PL" value="48">Poland (+48)</Option>
		<Option data-countryCode="PT" value="351">Portugal (+351)</Option>
		<Option data-countryCode="PR" value="1787">Puerto Rico (+1787)</Option>
		<Option data-countryCode="QA" value="974">Qatar (+974)</Option>
		<Option data-countryCode="RE" value="262">Reunion (+262)</Option>
		<Option data-countryCode="RO" value="40">Romania (+40)</Option>
		<Option data-countryCode="RU" value="7">Russia (+7)</Option>
		<Option data-countryCode="RW" value="250">Rwanda (+250)</Option>
		<Option data-countryCode="SM" value="378">San Marino (+378)</Option>
		<Option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</Option>
		<Option data-countryCode="SA" value="966">Saudi Arabia (+966)</Option>
		<Option data-countryCode="SN" value="221">Senegal (+221)</Option>
		<Option data-countryCode="CS" value="381">Serbia (+381)</Option>
		<Option data-countryCode="SC" value="248">Seychelles (+248)</Option>
		<Option data-countryCode="SL" value="232">Sierra Leone (+232)</Option>
		<Option data-countryCode="SG" value="65">Singapore (+65)</Option>
		<Option data-countryCode="SK" value="421">Slovak Republic (+421)</Option>
		<Option data-countryCode="SI" value="386">Slovenia (+386)</Option>
		<Option data-countryCode="SB" value="677">Solomon Islands (+677)</Option>
		<Option data-countryCode="SO" value="252">Somalia (+252)</Option>
		<Option data-countryCode="ZA" value="27">South Africa (+27)</Option>
		<Option data-countryCode="ES" value="34">Spain (+34)</Option>
		<Option data-countryCode="LK" value="94">Sri Lanka (+94)</Option>
		<Option data-countryCode="SH" value="290">St. Helena (+290)</Option>
		<Option data-countryCode="KN" value="1869">St. Kitts (+1869)</Option>
		<Option data-countryCode="SC" value="1758">St. Lucia (+1758)</Option>
		<Option data-countryCode="SD" value="249">Sudan (+249)</Option>
		<Option data-countryCode="SR" value="597">Suriname (+597)</Option>
		<Option data-countryCode="SZ" value="268">Swaziland (+268)</Option>
		<Option data-countryCode="SE" value="46">Sweden (+46)</Option>
		<Option data-countryCode="CH" value="41">Switzerland (+41)</Option>
		<Option data-countryCode="SI" value="963">Syria (+963)</Option>
		<Option data-countryCode="TW" value="886">Taiwan (+886)</Option>
		<Option data-countryCode="TJ" value="7">Tajikstan (+7)</Option>
		<Option data-countryCode="TH" value="66">Thailand (+66)</Option>
		<Option data-countryCode="TG" value="228">Togo (+228)</Option>
		<Option data-countryCode="TO" value="676">Tonga (+676)</Option>
		<Option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</Option>
		<Option data-countryCode="TN" value="216">Tunisia (+216)</Option>
		<Option data-countryCode="TR" value="90">Turkey (+90)</Option>
		<Option data-countryCode="TM" value="7">Turkmenistan (+7)</Option>
		<Option data-countryCode="TM" value="993">Turkmenistan (+993)</Option>
		<Option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</Option>
		<Option data-countryCode="TV" value="688">Tuvalu (+688)</Option>
		<Option data-countryCode="UG" value="256">Uganda (+256)</Option>
	  <Option data-countryCode="GB" value="44">UK (+44)</Option>
		<Option data-countryCode="UA" value="380">Ukraine (+380)</Option>
		<Option data-countryCode="AE" value="971">United Arab Emirates (+971)</Option>
		<Option data-countryCode="UY" value="598">Uruguay (+598)</Option>
		<Option data-countryCode="US" value="1">USA (+1)</Option> 
		<Option data-countryCode="UZ" value="7">Uzbekistan (+7)</Option>
		<Option data-countryCode="VU" value="678">Vanuatu (+678)</Option>
		<Option data-countryCode="VA" value="379">Vatican City (+379)</Option>
		<Option data-countryCode="VE" value="58">Venezuela (+58)</Option>
		<Option data-countryCode="VN" value="84">Vietnam (+84)</Option>
		<Option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</Option>
		<Option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</Option>
		<Option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</Option>
		<Option data-countryCode="YE" value="969">Yemen (North)(+969)</Option>
		<Option data-countryCode="YE" value="967">Yemen (South)(+967)</Option>
		<Option data-countryCode="ZM" value="260">Zambia (+260)</Option>
		<Option data-countryCode="ZW" value="263">Zimbabwe (+263)</Option>
    </Select>
      );

      return (
        <Fragment>
               {msg ? <Alert message={msg} type="error" /> : null}
              
          <Text strong style={{ fontSize: 40 }}>Register Your Business With Us</Text>
          <Form {...formItemLayout} style={{ paddingTop: 40 }} onSubmit={this.handleSubmit}>
            <Form.Item
              label={(
                <span>
                  Business Name&nbsp;
              </span>
              )}
            >
              {getFieldDecorator('businessname', {
                rules: [{ required: true, message: 'Please input your Business name!', whitespace: true }],
              })(
                <Input placeholder="Create Your Brand" />
              )}
            </Form.Item>
            <Form.Item
              label=" Enter a brief description"
            >
              {getFieldDecorator('description', {
                rules: [{  required: true, message: 'Enter a brief description of services offered' }],
              })(
                <TextArea rows={4} placeholder="Explain what you do or offer" />
              )}
            
            </Form.Item>

            <Form.Item
              label="Habitual Residence"
            >
              {getFieldDecorator('residence', {
                
                rules: [{ required: false, message: 'Please select your habitual residence!' }],
              })(
                <TextArea rows={4} placeholder="Enter house address if applicable" />
              )}
            
            </Form.Item>

            <Form.Item
              label="Phone Number"
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="Enter valid phone number" />
              )}
            </Form.Item>
         


            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" block htmlType="submit">Register Your Business</Button>
            </Form.Item>
          </Form>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <p>Please login to view user Sales page</p>
        </Fragment>
      )
    }
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(VendorSalesPage);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  error: state.error
});

export default connect(
  mapStateToProps,
  {registerBusiness}
)(WrappedRegistrationForm);
