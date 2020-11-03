import React, { useState } from 'react';
import { Widget } from './Widget';

export function FilePathConverter(): JSX.Element {
  const [unixPath, setUnixPath] = useState('');
  const [windowsPath, setWindowsPath] = useState('');
  const windowsCDrive = 'C:';
  const unixCDrive = '/c';
  const inputSize = 50;

  const unixToWindows = (path: string): string => {
    let ret = path.slice(0, 2) === unixCDrive ? windowsCDrive + path.slice(2) : path;
    ret = ret.replace(/\//gu, '\\');
    return ret;
  };

  const windowstoUnix = (path: string): string => {
    let ret = path.slice(0, 2) === windowsCDrive ? unixCDrive + path.slice(2) : path;
    ret = ret.replace(/\\/gu, '/');
    return ret;
  };

  const handleUnixChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUnixPath(e.currentTarget.value);
    setWindowsPath(unixToWindows(e.currentTarget.value));
  };

  const handleWindowsChange = (e: React.FormEvent<HTMLInputElement>) => {
    setWindowsPath(e.currentTarget.value);
    setUnixPath(windowstoUnix(e.currentTarget.value));
  };

  return (
    <Widget className="file-path-converter" title="File Path Converter">
      <table>
        <tr>
          <td>
            <label htmlFor="unix">UNIX:</label>
          </td>
          <td>
            <input
              type="text"
              id="unix-path-input"
              name="unix"
              value={unixPath}
              onChange={handleUnixChange}
              size={inputSize}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="windows">Windows:</label>
          </td>
          <td>
            <input
              type="text"
              id="windows-path-input"
              name="windows"
              value={windowsPath}
              onChange={handleWindowsChange}
              size={inputSize}
            />
          </td>
        </tr>
      </table>
    </Widget>
  );
}
