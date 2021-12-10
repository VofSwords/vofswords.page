//  *******************************************
//  * VofSwords' personal portfolio website   *
//  * Copyright (C) 2021-present VofSwords    *
//  *******************************************

import { Helmet } from "react-helmet-async";
import {
    FC
} from "react";
import icon from "../brending/blue-sharp-logo.svg";

const Head: FC = () => {

    return <>
        <Helmet>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/svg+xml" href={icon} />
            <title>{'VofSwords'}</title>
        </Helmet>
    </>
};

export default Head;