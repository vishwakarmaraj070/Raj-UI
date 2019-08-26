import React, { Component } from 'react'
import $ from 'jquery'
import form1Img from '../../assets/Images/background/image3.jpeg'
import form2Img from '../../assets/Images/background/form1.jpg'
import form3Img from '../../assets/Images/background/image3.jpeg'
import form4Img from '../../assets/Images/background/image3.jpeg'
import form4WraImg from '../../assets/Images/background/image3.jpeg'
import form6Img from '../../assets/Images/background/form1.jpg'
import '../../assets/css/form.css'


export default class Forms extends Component {

    componentDidMount(){
        $(document).ready(function(){
			$('#form4 .wraiper1 .box button').click(function(){
				$('#form4 .wraiper2').toggleClass('active');
			});
			$('#form4 .wraiper2 .box form .header i').click(function(){
				$('#form4 .wraiper2').toggleClass('active');
			});
		});
    }

    render() {
        return (
            <div className="container">
		<section>
			<div id="form1" style={{background:`url(${form1Img})`}}>
				<div className="box">
					<form>
						<div className="header">
							<h1>Login Form</h1>
						</div>
						<div className="inputBox">
							<input type="text" name="" required=""/>
							<label>User Name</label>
						</div>
						<div className="inputBox">
							<input type="password" name="" required=""/>
							<label>Password</label>
						</div>
						<div className="inputBox">
							<button type="submit">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</section>
		<section>
			<div id="form2" style={{background:`url(${form2Img})`}}>
				<div className="box">
					<form>
						<div className="header">
							<h1>Login Form</h1>
						</div>
						<div className="inputBox">
							<input type="text" name="" required=""/>
							<label>User Name</label>
							<span></span>
						</div>
						<div className="inputBox">
							<input type="password" name="" required=""/>
							<label>Password</label>
							<span></span>
						</div>
						<div className="inputBox">
							<button type="submit">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</section>
		<section>
			<div id="form3" style={{background:`url(${form3Img})`}}>
				<div className="box">
					<form>
						<div className="header">
							<h1>Login Form</h1>
						</div>
						<div className="inputBox">
							<input type="text" name="" required=""/>
							<label>User Name</label>
							<span></span>
						</div>
						<div className="inputBox">
							<input type="password" name="" required=""/>
							<label>Password</label>
							<span></span>
						</div>
						<div className="inputBox">
							<button type="submit">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</section>
		<section>
			<div id="form4" style={{background:`url(${form4Img})`}}>
				<div className="wraiper1">
					<div className="box">
						<button type="button">Login</button>
					</div>
				</div>
				<div className="wraiper2" style={{background:`url(${form4WraImg})`}}>
					<div className="box">
					<form>
						<div className="header">
							<h1>Login Form</h1>
							<i className="fa fa-close"></i>
						</div>
						<div className="inputBox">
							<input type="text" name="" required=""/>
							<label>User Name</label>
							<span className="reverse"></span>
							<span className="reverse1"></span>
						</div>
						<div className="inputBox">
							<input type="password" name="" required=""/>
							<label>Password</label>
							<span className="reverse"></span>
							<span className="reverse1"></span>
						</div>
						<div className="inputBox">
							<button type="submit">Submit</button>
						</div>
					</form>
				</div>
				</div>
			</div>
		</section>
		<section>
			<div id="form5" style={{background:`url(${form2Img})`}}>
				<div className="box">
					<form>
						<div className="header">
							<h1>Login Form</h1>
						</div>
						<div className="inputBox">
							<input type="text" name="" required=""/>
							<label>User Name</label>
							<span></span>
						</div>
						<div className="inputBox">
							<input type="password" name="" required=""/>
							<label>Password</label>
							<span></span>
						</div>
						<div className="inputBox">
							<button type="submit">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</section>
		<section>
			<div id="form6" style={{background:`url(${form6Img})`}}>
				<div className="box">
					<form>
						<div className="header">
							<h1>Login Form</h1>
						</div>
						<div className="inputBox">
							<input type="text" name="" required=""/>
							<label>User Name</label>
							<span></span>
						</div>
						<div className="inputBox">
							<input type="password" name="" required=""/>
							<label>Password</label>
							<span></span>
						</div>
						<div className="inputBox">
							<button type="submit">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</section>
		<section>
			<div id="form7">
				<div className="box">
					<section></section>
					<section></section>
					<section></section>
					<section></section>
				</div>
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>

		<section>
			<div className="box">
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>

		<section>
			<div className="box">
				
			</div>
		</section>
		<section>
			<div className="box">
				
			</div>
		</section>
		
	</div>
        )
    }
}
