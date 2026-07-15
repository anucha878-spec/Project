# 26. ms_none_reinsurer

> **Source:** http://wiki.thaisamut.co.th/display/RDSINRI/26.+ms_none_reinsurer  
> **Page ID:** 1196589357  
> **Path:** Home / Current Version / 04. Persistence Specification / Master / 26. ms_none_reinsurer

---

| **Database** | newri | **Link Previous Version** | - |
| --- | --- | --- | --- |
| **Table** | ms_none_reinsurer | **Data Source** | - |
| **Project Name** | โครงการ Individual New RI | **Data Security** | Internal Use |
| **Version** | 1.0 | **Objective** | Application Data |
| **Created By** | Suthanee.sa | **Year Type** | A.D. |
| **Created Date (yyyy-mm-dd )** | 22/08/2025 | **Description** | สำหรับเก็บข้อมูลเพื่อตรวจสอบกรมธรรม์ที่ไม่ต้องส่งประกันต่อ |
| **Updated By** |  |  | Drop Table เดิม สร้างใหม่ โครงสร้างใหม่ ใช้วิธี Adhoc ไม่ต้อง Change log |
| **Updated Date (yyyy-mm-dd )** |  |  |  |

| **No.** | **Key** | **Index** | **Attribute Name** | **Data Type** | **Length** | **Not Null (Y/N)** | **Description** | **Datasource****Table.Field** | **Function** **Transform Data** | **Lookup Table.Field** | **Possible Value** | **Min Value** | **Max Value** | **Example** | **เงื่อนไขในการบันทึก** | **Updated By** | **Remark** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | PK |  | ms_none_reinsurer_id | int8 | default by data type | Y | id ของ Recordauto generate |  |  |  |  |  |  | 1 |  |  |  |
| 2 | UK |  | policy_type | Varchar | 10 | Y | ประเภทกรมธรรม์ |  |  |  |  |  |  | ORDPAULIND |  |  |  |
| 3 | UK |  | policy_no | Varchar | 20 50 | Y | เลขที่กรมธรรม์ |  |  |  |  |  |  | 153198 |  |  |  |
| 4 | UK |  | product_group | Varchar | 30 | Y | กลุ่ม Product |  |  |  |  |  |  | BASERIDERALL |  |  |  |
| 5 | UK |  | plan_code | Varchar | 10 | Y | รหัสกรมธรรม์ |  |  |  |  |  |  | G25G26G27ALL |  |  |  |
| 6 |  |  | Remark | Varchar | 255 | N | หมายเหตุ |  |  |  |  |  |  |  |  |  |  |
| 7 |  |  | created_date | Timestamp |  | Y | วันที่บันทึกรายการ |  |  |  |  |  |  | 2023-06-04 |  |  |  |
| 8 |  |  | created_by | Varchar | 50 | Y | ผู้บันทึกรายการ |  |  |  |  |  |  | boss |  |  |  |
