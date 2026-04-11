// function Profile(Props) {
//     return (
//         <>
//             <p>이름: {Props.name}</p>
//             <p>성별: {Props.gender}</p>
//             <p>학과: {Props.department}</p>
//             <p>조회수: {Props.viewCount}</p>
//         </>
//     );
// }
//
// export default Profile;

function Profile({name, gender, department, viewCount}) {
    return (
        <>
          <p>이름: {name}</p>
          <p>성별: {gender}</p>
          <p>학과: {department}</p>
          <p>조회수: {viewCount}</p>
        </>
    );
}

export default Profile;