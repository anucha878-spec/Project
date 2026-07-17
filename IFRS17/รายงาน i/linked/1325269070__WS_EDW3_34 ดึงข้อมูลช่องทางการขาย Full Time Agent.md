# WS_EDW3_34 ดึงข้อมูลช่องทางการขาย Full Time Agent

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1325269070
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
[ [Overview](#WS_EDW3_34ดึงข้อมูลช่องทางการขายFullTimeAgent-Overview) ] [ [Input](#WS_EDW3_34ดึงข้อมูลช่องทางการขายFullTimeAgent-Input) ] [ [Process](#WS_EDW3_34ดึงข้อมูลช่องทางการขายFullTimeAgent-Process) ] [ [Output](#WS_EDW3_34ดึงข้อมูลช่องทางการขายFullTimeAgent-Output) ] [ [Exception](#WS_EDW3_34ดึงข้อมูลช่องทางการขายFullTimeAgent-Exception) ] [ [Example Input & Output](#WS_EDW3_34ดึงข้อมูลช่องทางการขายFullTimeAgent-ExampleInput&Output) ]

## Overview

- ดึงข้อมูลช่องทางการขาย Full Time Agent
- ก่อนหน้านี้มีกระบวนการให้ทาง Support Manual ที่ [10_09_07 Manually แก้ไขข้อมูลช่องทางการขาย full time agent](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1137213709))

## Input

>

| Name | Type | Description | Example | Validation (Y/N) |
| --- | --- | --- | --- | --- |
| limit | numeric | limit | 100 | |
| offset | numeric | offset | 1 | |

## Process

>
**1. กรมธรรม์ PA**

>
**2. กรมธรรม์ ORD**

>
**3. กรมธรรม์อุตสาหกรรม IND, GOV**

>
**4. กรมธรรม์ UL**

## Output

| Name | Type | Description | Example | Type | Source |
| --- | --- | --- | --- | --- | --- |
| policy_number | String | เลขกรมธรรม์ | 9008529 | PA | EDWLIB_TBPOLICY.POLNO |
| ORD | EDWLIB_OLPPOLMS.POLIC# | | | | |
| IND,GOV | EDWLIB_POLCYMB0.mbpol#EDWLIB_POLCYMX0.mxpol#EDWLIB_POLCYMS0.mspol#EDWLIB_GPLCYMB0.mbpol#EDWLIB_GPLCYMX0.mxpol# | | | | |
| UL | ULLIB_TPSPLC01.POLNVC | | | | |
| report_type | String | ประเภท I report | I01 | - | - |
| sale_channel | String | ตัวย่อของรหัสช่องทางการขาย | AGT | - | - |
| sale_channel_code | String | รหัสช่องทางการขาย | 4070116 | - | - |

## Exception

## Example Input & Output

1.

>

```

```