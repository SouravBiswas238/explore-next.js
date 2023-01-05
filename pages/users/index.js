import React from 'react';
import Link from 'next/link'

const index = ({ users },) => {
    return (
        <div>
            <h3>this is user js page {users.length} </h3>
            {
                users.map(user => <div key={user._id}>
                    <h4>  Name: {user.name}
                        <Link href={`users/${user.id}`}>
                            <button>Explore something</button>
                        </Link>
                    </h4>

                </div>)
            }
        </div>
    );
};

export default index;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    return {
        props: { users: data }, // will be passed to the page component as props
    }
}