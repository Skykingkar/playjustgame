<div className="flex p-2 border-gray-500 border ">
{/* Patient & Billing Details */}
<div className="mt-5 border-t pt-5 flex border">
  <div className="grid grid-cols-2 gap-4">
    <div>
      <p className="p-2">
        <light>Patient Name</light>
        <br /> Kumar Shashi
      </p>
      <p className="p-2">
        <light>Consultation Date:</light>
        <br /> 22 September 2023 (11:00 AM - 12:00 PM)
      </p>
    </div>
    <div>
      <p className="p-2">
        <light>Mobile No</light>
        <br /> +91 799127226
      </p>
      <p className="p-2">
        <light>Age & Gender:</light> <br />
        26 Yrs Male
      </p>
    </div>
    <hr className="w-full border-t-2 border-gray-300" />
    <div className="mt-4 bg-gray-100 p-4 rounded-lg">
    
      <h4 className="text-lg font-semibold">
        Instructions to Follow
      </h4>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        <li>Arrive half an hour early.</li>
        <li>
          Don't trust doctors; your life is in God's hands.
        </li>
        <li>
          Once the treatment is done, the money will not be
          refunded.
        </li>
        <li>
          Doctor is not God. Don't believe in the doctor.
        </li>
      </ul>
    </div>
  </div>
</div>

<div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border">
  <h4 className="text-sm font-bold text-gray-700">
    Billing Details:
  </h4>
  <p className="text-sm text-gray-600">
    Total: ₹{appointment.billingDetails.total}
  </p>
  <p className="text-sm text-gray-600">
    Other Charges: ₹
    {appointment.billingDetails.otherCharges}
  </p>
  <p className="text-sm text-gray-600">
    Discount: ₹{appointment.billingDetails.discount}
  </p>
  <p className="text-sm text-gray-700 font-semibold">
    Payable: ₹{appointment.billingDetails.payable}
  </p>

  <h4 className="text-sm font-bold mt-4 text-gray-700">
    Instructions:
  </h4>
  <ul className="list-disc ml-6 text-sm text-gray-600">
    {appointment.instructions.map((instruction, index) => (
      <li key={index}>{instruction}</li>
    ))}
  </ul>
</div>
</div>