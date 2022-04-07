export const AddressBook = ({ data }) => {
  console.log("In address", data);
  return (
    <>
      <div
        className="users-data"
        style={{
          width: "50%",
          padding: "10px",
          height: "130px",
          border: "1px solid tomato",
          borderRadius: "6px",
          margin: "20px",
          marginLeft: "10%",
          textAlign: "left",
        }}
      >
        <div style={{fontSize: "20px", fontWeight: "bold" }} >Address Book</div>
        <div>
          {data.firstName} {data.lastName}
        </div>
        <div>{data.city}</div>
        <div>{data.state}</div>
        <div>{data.zipcode}</div>
        <div>mobile: {data.phone}</div>
      </div>
    </>
  );
};
