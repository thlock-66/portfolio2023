import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const DownloadButton = () => {
    return (
        <a href="/Resume_LockYin_2025.pdf" className="outline-button" download>
            Resume <ArrowDownTrayIcon className="downloadicon" />
        </a>
    );
};

export default DownloadButton;
