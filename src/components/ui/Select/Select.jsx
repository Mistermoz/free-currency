import "./Select.scss";

const Select = ({options, ...props}) => {
    return (
    <select {...props} className="select-round">
        {options.map((option, index) => {
        return <option value={option} key={index}>{option}</option>
        })}
    </select>
  );
};

export default Select;