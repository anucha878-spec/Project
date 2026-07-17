# WS_EDW3_28 ดึงข้อมูล PayorID ของ Rider PB ที่ CIS

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1220477124
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
[ [Overview](#WS_EDW3_28ดึงข้อมูลPayorIDของRiderPBที่CIS-Overview) ] [ [Repositories](#WS_EDW3_28ดึงข้อมูลPayorIDของRiderPBที่CIS-Repositories) ] [ [Service path](#WS_EDW3_28ดึงข้อมูลPayorIDของRiderPBที่CIS-Servicepath) ] [ [Input](#WS_EDW3_28ดึงข้อมูลPayorIDของRiderPBที่CIS-Input) ] [ [Process](#WS_EDW3_28ดึงข้อมูลPayorIDของRiderPBที่CIS-Process) ] [ [Output](#WS_EDW3_28ดึงข้อมูลPayorIDของRiderPBที่CIS-Output) ] [ [Exception](#WS_EDW3_28ดึงข้อมูลPayorIDของRiderPBที่CIS-Exception) ] [ [Example Input & Output](#WS_EDW3_28ดึงข้อมูลPayorIDของRiderPBที่CIS-ExampleInput&Output) ]

## Overview

ดึงข้อมูลPayorID ของ Rider PB ที่ CIS

## Repositories

msa-cisappapi

## Service path

GET :

>
Icon

TYPE :

**อธิบายได้ดังนี้**

GET - Select

POST - Insert

PUT - Update

DELETE - Delete

## Input

>

| Name | Type | Description | Example | Validation (Y/N) |
| --- | --- | --- | --- | --- |
| limit | numeric | limit | 100 | |
| offset | numeric | offset | 1 | |

## Process

- ดึงข้อมูลPayorID ของ Rider PB ที่ CIS

## Output

| Name | Type | Description | Example | Source |
| --- | --- | --- | --- | --- |
| policy_no | String | เลขที่กรมธรรม์ | 1248636 | [cis_policy_link](http://wiki.thaisamut.co.th/display/RDSCISC/cis_policy_link).policy_no |
| customer_id | String | รหัสลูกค้า | 25621683273 | [cis_policy_link](http://wiki.thaisamut.co.th/display/RDSCISC/cis_policy_link).customer_id |
| policy_type | String | ประเภทกรมธรรม์ORD = สามัญ | ORD | [cis_policy_link](http://wiki.thaisamut.co.th/display/RDSCISC/cis_policy_link).policy_type |
| customer_role | String | หน้าที่ของลูกค้าสำหรับกรมธรรม์PAY = ผู้ชำระเบี้ย | PAY | [cis_policy_link](http://wiki.thaisamut.co.th/display/RDSCISC/cis_policy_link).customer_roleQueryselect * from CIS_POLICY_LINK where customer_role = 'PAY' |
| create_date | Date | วันที่ทำรายการใน cis | 2019-01-12 18:25:21.878 | [cis_policy_link](http://wiki.thaisamut.co.th/display/RDSCISC/cis_policy_link).create_date |
| update_date | Date | วันที่แก้ไขข้อมูลใน cis | 2025-01-12 19:50:20.001 | [cis_policy_link](http://wiki.thaisamut.co.th/display/RDSCISC/cis_policy_link).update_date |

## Exception

## Example Input & Output

1.

>

```

```