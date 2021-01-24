import React, { useState, useRef } from 'react';
import register from '../images/register.jpg';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import Popup from "reactjs-popup";
import '../css_files/Popup.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { API_URL } from '../utils/constants';

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'cafeteria'

const id = new ObjectID();
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

const db = client.db(databaseName);
db.collection('files').find({}).toArray(function(error, user){
        if (error) {
            return console.log('Unable to fetch')
        }
        console.log(user)
    })
})

const Register = (props) => {
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
  const [state, setState] = useState({
    FullName: '',
    OrganisationName: '',
    EmployeeID:'',
    MobileNo:'',
    Email:'',
    Password:''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    dropRef.current.style.border = '2px dashed #e9ebeb';
  };

  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const { FullName, OrganisationName, EmployeeID, MobileNo,Email,Password } = state;
      if (FullName.trim() !== '' && OrganisationName.trim() !== '' && EmployeeID.trim() !== '' && MobileNo.trim() !== '' && Email.trim() !== '' && Password.trim() !== '') {
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('FullName', FullName);
          formData.append('OrganisationName', OrganisationName);
          formData.append('EmployeeID', EmployeeID);
          formData.append('MobileNo', MobileNo);
          formData.append('Email', Email);
          formData.append('Password', Password);
          setErrorMsg('');
          await axios.post(`${API_URL}/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          props.history.push('/Success');
        } else {
          setErrorMsg('Please select a file to add.');
        }
      } else {
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  return (
    <div className="h-100 center pt3 pb6">
    <div className="ml4 pv4 mid-gray sans-serif">
        <div className="w-90 w-80-m w-50-l center cf cover wrap bg-center shadow-1 bg-light-gray" style={{ backgroundImage:`url(${register})`}}>
            <div className="w-80 w-70-m w-60-l fr bg-white">
            <header className="pa3 bb b--light-gray relative">
                <h1 className="b ma0 f3">Sign Up</h1>
            </header>
        <React.Fragment>
          <Form className="search-form ph3 pt3 pb4 f7" onSubmit={handleOnSubmit}>
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Row>
              <Col>
              <div class="mb3">
              <label for="" className="db ttu b lh-copy">Full Name</label>
                <Form.Group controlId="FullName">
                  <Form.Control className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
                    type="text"
                    name="FullName"
                    value={state.FullName || ''}
                    placeholder="Enter Full Name"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
              <div class="mb3">
                    <label for="" className="db ttu b lh-copy">Organisation Name</label>
                <Form.Group controlId="OrganisationName">
                  <Form.Control className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
                    type="text"
                    name="OrganisationName"
                    value={state.OrganisationName || ''}
                    placeholder="Enter Organisation Name"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
              <div class="mb3">
                    <label for="" className="db ttu b lh-copy">Employee Id</label>
                <Form.Group controlId="EmployeeID">
                  <Form.Control className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
                    type="text"
                    name="EmployeeID"
                    value={state.EmployeeID || ''}
                    placeholder="Enter Employee ID"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
              <div class="mb3">
                    <label for="" className="db ttu b lh-copy">Mobile No.</label>
                <Form.Group controlId="MobileNo">
                  <Form.Control className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
                    type="text"
                    name="MobileNo"
                    value={state.MobileNo|| ''}
                    placeholder="Enter MobileNo"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
              <div class="mb3">
                    <label for="" className="db ttu b lh-copy">Email</label>
                <Form.Group controlId="Email">
                  <Form.Control className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
                    type="text"
                    name="Email"
                    value={state.Email || ''}
                    placeholder="Enter Email"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
              <div class="mb4">
                    <label for="" className="db ttu b lh-copy">Password</label>
                <Form.Group controlId="Password">
                  <Form.Control className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
                    type="Password"
                    name="Password"
                    value={state.Password || ''}
                    placeholder="Enter Password"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                </div>
              </Col>
            </Row>

            <div className="upload-section w-100 mw-100 bn br1 pa2 bg-light-gray">
              <Dropzone
                onDrop={onDrop}
                onDragEnter={() => updateBorder('over')}
                onDragLeave={() => updateBorder('leave')}
              >
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                    <input {...getInputProps()} />
                    <p style={{padding:"10px", marginBottom:"10px"}}>Drag and drop a file OR click here to select a file</p>
                    {file && (
                      <div>
                        <strong>Selected file:</strong> {file.name}
                      </div>
                    )}
                  </div>
                )}
              </Dropzone>
              {previewSrc ? (
                isPreviewAvailable ? (
                  <div className="image-preview">
                    <img className="preview-image" src={previewSrc} alt="Preview" />
                  </div>
                ) : (
                  <div className="preview-message">
                    <p>No preview available for this file</p>
                  </div>
                )
              ) : (
                <div className="preview-message">
                  <p>Image preview will be shown here after selection</p>
                </div>
              )}
            </div>
            <div class="mb3 tc f6">
                    Do you have an account? <a href="/login" className="blue ph1 pointer" >Log In Now!</a>
            </div>
            <div class="tc">
            <input type="Submit" href="/login" value="Sign Up" className="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow"/>
            </div>
          </Form>
        </React.Fragment>
    </div>
    </div>
</div>

</div>
  );
};

export default Register;