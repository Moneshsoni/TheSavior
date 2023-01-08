pragma solidity 0.8.9;
contract Struct_practice{
    struct New_year{
        string name;
        uint number;
        bool pass;
    }

    event Year(uint year);

    New_year new_year;

     struct Mark{
        string name;
        uint number;
        bool status;   
    }

    Mark[] public marks;
    function set_New_year(string memory _name, uint _number, bool _pass)public{
        new_year.name = _name;
        new_year.number = _number;
        new_year.pass =_pass;
        emit Year(new_year.number);
    }

    function get_new()public view returns(string memory, uint, bool){
        return (new_year.name,new_year.number,new_year.pass); 
    }

    function setMarks(string memory _name, uint _number, bool _status)public{
        marks.push(Mark(_name,_number,_status));
    }
}pragma solidity 0.8.9;
contract Struct_practice{
    struct New_year{
        string name;
        uint number;
        bool pass;
    }

    event Year(uint year);

    New_year new_year;

     struct Mark{
        string name;
        uint number;
        bool status;   
    }

    Mark[] public marks;
    function set_New_year(string memory _name, uint _number, bool _pass)public{
        new_year.name = _name;
        new_year.number = _number;
        new_year.pass =_pass;
        emit Year(new_year.number);
    }

    function get_new()public view returns(string memory, uint, bool){
        return (new_year.name,new_year.number,new_year.pass); 
    }

    function setMarks(string memory _name, uint _number, bool _status)public{
        marks.push(Mark(_name,_number,_status));
    }
}
