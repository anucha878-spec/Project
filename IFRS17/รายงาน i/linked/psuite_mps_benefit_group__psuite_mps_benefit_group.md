# psuite_mps_benefit_group

- url: http://wiki.thaisamut.co.th/display/RDSADW/psuite_mps_benefit_group
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
| **Database** | adwetl | **Link Previous Version** | - |
| --- | --- | --- | --- |
| **Table** | psuite_mps_benefit_group | **Data Source** | - |
| **Project Name** | Monthly Snapshot Policy | **Data Security** | Internal Use |
| **Version** | 1.0 | **Objective** | Application Data |
| **Created By** | Thidarat Luangprasert | **Year Type** | A.D. |
| **Created Date (yyyy-mm-dd )** | 2024-10-21 | **Description** | เก็บข้อมูลกลุ่มโรคที่ดีงมาจาก psuite |
| **Updated By** | | | |
| **Updated Date (yyyy-mm-dd )** | | | |

| **No.** | **Key** | **Attribute Name** | **Data Type** | **Length** | **Null (Y/N)** | **Description** | **Datasource****Table.Field** | **Function** **Transform Data** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | PK | ms_mps_benefit_group_id | Numeric | 22,0 | N | เลขที่ Running | | | | | | | | | thidarat.lu | |
| 2 | | benefit_group | Varchar | 20 | N | กลุ่มโรค | | | | | | | กลุ่มที่ 1 | | thidarat.lu | |
| 3 | | benefit_group_abbr | Varchar | 10 | N | ตัวย่อกลุ่มโรค | | | | | | | CB01 | | thidarat.lu | |
| 4 | | benefit_group_name | Varchar | 255 | N | ชื่อกลุ่มโรค | | | | | | | กลุ่มโรคมะเร็ง (Cancer) | | thidarat.lu | |
| **ข้อมูลระบบ** | | | | | | | | | | | | | | | | |
| | | created_date | Timestamp | | N | วันที่สร้างรายการ | | | | | | | 2023-06-09 15:49:19.872 +0700 | | thidarat.lu | |
| | | created_by | Varchar | 50 | N | ผู้สร้างรายการ | | | | | | | system | | thidarat.lu | |
| | | updated_date | Timestamp | | Y | วันที่ปรับปรุงรายการ | | | | | | | 2023-06-09 15:49:19.872 +0700 | | thidarat.lu | |
| | | updated_by | Varchar | 50 | Y | ผู้ปรับปรุงรายการ | | | | | | | system | | thidarat.lu | |