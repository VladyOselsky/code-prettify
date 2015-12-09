/*

 Copyright (C) 2008 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r\xA0]+/,null,'\t\n\r\xA0'],["str",/^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\'\\]|\\.)*')/,null,'"\'']],[["com",/^(?:--[^\r\n]*|\/\*[\s\S]*?(?:\*\/|$))/],["kwd",/^(?:ADD|ALTER|AS|ASC|AUTHORIZATION|BACKUP|BEGIN|BREAK|BROWSE|BULK|BY|CASCADE|CASE|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COLUMN|COMMIT|COMPUTE|CONSTRAINT|CONTAINSTABLE|CONTINUE|CREATE|CURRENT|CURRENT_DATE|CURSOR|DATABASE|DBCC|DEALLOCATE|DECLARE|DEFAULT|DELETE|DENY|DESC|DISK|DISTINCT|DISTRIBUTED|DOUBLE|DROP|DUMP|ELSE|END|ERRLVL|ESCAPE|EXCEPT|EXEC|EXECUTE|EXIT|EXTERNAL|FETCH|FILE|FILLFACTOR|FOR|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GOTO|GRANT|GROUP|HAVING|HOLDLOCK|IDENTITY|IDENTITY_INSERT|IDENTITYCOL|IF|INDEX|INSERT|INTERSECT|INTO|KEY|KILL|LINENO|LOAD|MERGE|NATIONAL|NOCHECK|NONCLUSTERED|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|OPTION|ORDER|OVER|PERCENT|PLAN|PRECISION|PRIMARY|PRINT|PROC|PROCEDURE|PUBLIC|RAISERROR|READTEXT|RECONFIGURE|REFERENCES|REPLICATION|RESTORE|RESTRICT|RETURN|REVERT|REVOKE|ROLLBACK|ROWCOUNT|ROWGUIDCOL|RULE|SAVE|SCHEMA|SECURITYAUDIT|SELECT|SEMANTICKEYPHRASETABLE|SEMANTICSIMILARITYDETAILSTABLE|SEMANTICSIMILARITYTABLE|SET|SETUSER|SHUTDOWN|STATISTICS|TABLE|TABLESAMPLE|TEXTSIZE|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUNCATE|UNION|UNIQUE|UPDATETEXT|USE|USER|VALUES|VARYING|VIEW|WAITFOR|WHEN|WHERE|WHILE|WITH|WRITETEXT)(?=[^\w-]|$)/i,null],["fnc",/^(?:$PARTITION|@@ERROR|@@IDENTITY|@@PACK_RECEIVED|@@ROWCOUNT|@@TRANCOUNT|ASCII|AVG|BINARY_CHECKSUM|CHAR|CHARINDEX|CHECKSUM|CHECKSUM_AGG|COMPRESS|CONCAT|CONNECTIONPROPERTY|CONTEXT_INFO|COUNT|COUNT_BIG|CURRENT_REQUEST_ID|CURRENT_TRANSACTION_ID|DECOMPRESS|DENSE_RANK|DIFFERENCE|ERROR_LINE|ERROR_MESSAGE|ERROR_NUMBER|ERROR_PROCEDURE|ERROR_SEVERITY|ERROR_STATE|FORMAT|FORMATMESSAGE|GET_FILESTREAM_TRANSACTION_CONTEXT|GETANSINULL|GROUPING|GROUPING_ID|HOST_ID|HOST_NAME|ISNULL|ISNUMERIC|LEFT|LEN|LOWER|LTRIM|MAX|MIN|MIN_ACTIVE_ROWVERSION|NCHAR|NEWID|NEWSEQUENTIALID|NTILE|PATINDEX|QUOTENAME|RANK|REPLACE|REPLICATE|REVERSE|RIGHT|ROW_NUMBER|ROWCOUNT_BIG|RTRIM|SESSION_CONTEXT|SOUNDEX|SPACE|STDEV|STDEVP|STR|STUFF|SUBSTRING|SUM|UNICODE|UPPER|VAR|VARP|XACT_STATE|)(?=[^\w-]|$)/i,null],["opr",/^(?:ALL|AND|ANY|BETWEEN|CROSS|IN|INNER|IS|JOIN|LEFT|LIKE|RIGHT|SOME)(?=[^\w-]|$)/i,null],["dat",/^(?:BIGINT|BINARY|BIT|CHAR|DATE|DATETIME|DATETIME2|DATETIMEOFFSET|DECIMAL|FLOAT|GEOGRAPHY|GEOMETRY|HIERARCHYID|IMAGE|INT|MONEY|NCHAR|NTEXT|NUMERIC|NVARCHAR|REAL|SMALLDATETIME|SMALLINT|SMALLMONEY|SQL_VARIANT|SYSNAME|TEXT|TIME|TIMESTAMP|TINYINT|UNIQUEIDENTIFIER|VARBINARY|VARCHAR|XML)(?=[^\w-]|$)/i,null],["lit",/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],["pln",/^[a-z_][\w-]*/i],["pun",/^[^\w\t\n\r\xA0\"\'][^\w\t\n\r\xA0+\-\"\']*/]]),["tsql"]);