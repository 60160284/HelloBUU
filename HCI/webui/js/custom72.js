$().ready(function() {
	
	// validate the comment form when it is submitted
	$("#commentForm").validate();

	// validate signup form on keyup and submit
	$("#signupForm").validate({
		rules: {
			name: {
				required:true,
				minlength: 50
			},
			username: {
				required: true,
				minlength: 6,
				maxlength: 10
			},
			password: {
				required: true,
				minlength: 8
			},
			confirm_password: {
				required: true,
				minlength: 8,
				equalTo: "#password"
			},
			email: {
				required: true,
				email: true
			},
			url:{
                required: true,
                url: true
			},
			birth:{
				required: true,
				dateISO: true
			},
			number:{
				required: true,
				digits: true,
				minlength: 10
			},
			fax:{
				digit:true

			},
			creditc:{
				required: true,
				creditcard: true
			},

		},
		messages: {
			name: {
				required: "กรุณาป้อนตัวอักษร",
				minlength: "ต้องใส่ตัวอักษรไม่เกิน 50 ตัวอักษร"
			},
	
			username: {
				required: "กรุณาใส่ชื่อผู้ใช้",
				minlength: "ไม่ต่ำกว่า 6 และไม่เกิน 10 ตัวอักษร"
			},
			password: {
				required: "กรุณาใส่รหัสผ่าน",
				minlength: "ไม่ต่ำกว่า 8 ตัวอักษร"
			},
			confirm_password: {
				required: "กรุณาใส่รหัสผ่านอีกครั้ง",
				equalTo: "ให้เหมือนกับรหัสผ่าน"
			},

			email: "ตรวจสอบความถูกต้อง",
			url: "ตรวจสอบความถูกต้อง",
			birth: "ตรวจสอบความถูกต้อง",

			number:{
				required: "ตัวเลขเท่านั้น digit only",
				minlength: "ต้องใส่ตัวเลข 10 ตัว"

			},

			fax: "ใส่ตัวเลขเท่านั้น",

			creditc:{
				required: "ตรวจสอบความถูกต้อง",
				
			}

			
            
		}
	});

});
