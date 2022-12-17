import { useCallback, useMemo, useState } from "react";
import UsersList from '../UsersList/UsersList';
import './SectionTwo.css';
import GetUsers from "./GetUsers";

export default function SectionTwo() {
    const [users,setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(0);

    const fetchUsers = useCallback(async function(page) {
        setLoading(true);
        const json = await GetUsers(page+1);
        if (json.data.docs !== undefined) {
            json.data.docs.map(u => u.date = u.date.replace('T', ' ').substring(0,u.date.length-14))
            setUsers(json.data.docs);
            setPageCount(json.data.totalPages);
        }
        setLoading(false);
    }, [])

    const columns = useMemo(() => [
        {
            Header:'Email',
            accessor:'email'
        },
        {
            Header:'Username',
            accessor:'username'
        },
        {
            Header:'Date',
            accessor:'date'
        },
    ],[])

        return (
            <div className='page2'>
                <div className="slider">
                    <div className="tiny">
                        <p>OUR USERS</p>
                        <p>OUR USERS</p>
                        <p>OUR USERS</p>
                    </div>
                    <div className="slide-track">
                        <div className="slide">
                            <p>OUR USERS →</p>
                        </div>
                        <div className="slide">
                            <p>OUR USERS →</p>
                        </div>
                        <div className="slide">
                            <p>OUR USERS →</p>
                        </div>
                        <div className="slide">
                            <p>OUR USERS →</p>
                        </div>
                        <div className="slide">
                            <p>OUR USERS →</p>
                        </div>
                        <div className="slide">
                            <p>OUR USERS →</p>
                        </div>
                        <div className="slide">
                            <p>OUR USERS →</p>
                        </div>
                        <div className="slide">
                            <p>OUR USERS →</p>
                        </div>
                        <div className="slide">
                            <p>OUR USERS →</p>
                        </div>
                        <div className="slide">
                            <p>OUR USERS →</p>
                        </div>
                    </div>
                    <div className="tiny">
                        <p>OUR USERS</p>
                        <p>OUR USERS</p>
                        <p>OUR USERS</p>
                    </div>
                </div>

                <div className="div2">
                    <p> OUR USERS </p>
                    <div className='list'>
                        <UsersList 
                        data={users}
                        columns={columns}
                        fetchData={fetchUsers}
                        pageCount={pageCount}
                        />
                    </div>
                    {
                        isLoading && <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                    }
                </div>  
            </div>
        )
}