import React from "react";
import classes from "./roles.module.scss"

const RolesContent = () => {
    return (
        <div className={classes.content_wrapper}>
            <h1>Ролі</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Назва</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            dsfdsf
                        </td>
                        <td>
                            13432
                        </td>
                        <td>
                            X
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RolesContent;