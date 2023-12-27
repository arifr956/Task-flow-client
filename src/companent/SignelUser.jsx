
const SignelUser = ({userSingel,i}) => {
    const {name,photo,email} = userSingel
    return (
        <tr className="bg-base-100 border-b-2 border-black">
      <th className="w-[70px]">{i + 1}</th>
      <td className="w-[250px] text-left text-lg">
        <img src={photo} alt="" className="w-[50px] h-[50px] rounded-[50%]"/>
      </td>
      <td className="text-lg text-black w-[350px] text-left">{name}</td>
      <td className="text-lg text-black text-left">{email}</td>
    </tr>
    );
};

export default SignelUser;