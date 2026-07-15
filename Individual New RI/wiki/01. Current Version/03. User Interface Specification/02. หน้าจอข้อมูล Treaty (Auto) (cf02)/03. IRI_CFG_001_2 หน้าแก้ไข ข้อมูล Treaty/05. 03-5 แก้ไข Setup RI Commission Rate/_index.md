# 03-5 แก้ไข Setup RI Commission Rate

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1107427799  
> **Page ID:** 1107427799  
> **Path:** Home / Current Version / 03. User Interface Specification / 02. หน้าจอข้อมูล Treaty (Auto) (cf02) / 03. IRI_CFG_001_2 หน้าแก้ไข ข้อมูล Treaty / 03-5 แก้ไข Setup RI Commission Rate

---

### สิทธิ์การเข้า

- [เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)](https://docs.google.com/spreadsheets/d/17bqeu7FPj5gvU25OJsIW8LxZau3TS5wf2E7bTMm-q6k/edit#gid=423528764)

### Assumption

- ผู้ใช้งานต้อง Log in เข้าใช้งานอย่างถูกต้อง
- ผู้ใช้งานต้องมีสิทธิ์การเข้าถึงหน้าจอ การบันทึก/แก้ไข รายการ Treaty

### Screen Overview

- เพื่อ การบันทึก/แก้ไข รายการ Treaty

### Pre-Condition

1. ผู้ใช้งานต้องมีสิทธิ์การใช้งานของ Maker และมองเห็น Icon ![](https://lh6.googleusercontent.com/BKj8Ka58SefZjOKt3r_HqO1f33z3PjmvkT3LEf7NDjanNjOv35TKS-tPWhTw2-e79IWV8FQMehI5KaCGDY0wh-rB9OwAsURgsLxzr1qKPqFWSw_45Y75GX1jq_usfc2NYsSr2ZQ1xeEeR_HRLUpqxAc) ในหน้า [IRI_CFG_001 หน้ารวม + ค้นหา Treaty (cf02)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1098613387)
2. ผู้ใช้งานกด Icon ![](https://lh6.googleusercontent.com/BKj8Ka58SefZjOKt3r_HqO1f33z3PjmvkT3LEf7NDjanNjOv35TKS-tPWhTw2-e79IWV8FQMehI5KaCGDY0wh-rB9OwAsURgsLxzr1qKPqFWSw_45Y75GX1jq_usfc2NYsSr2ZQ1xeEeR_HRLUpqxAc) ระบบจึงจะแสดงหน้าจอนี้

![](/download/attachments/1107427669/image2023-11-9%209%3A27%3A12.png?version=1&modificationDate=1699496832979&api=v2)

##### Setup RI Commission Rate

![](https://lh6.googleusercontent.com/p6bccs_d_8ztTO2q_f612O5F6hyDU5v1QFvUurmM2FFO16KD7CDZ64VoOvfOZ9tZJX3sBUn9HrmCu7cEdh3lwI4W29105pIpop43Lo3G7C1lZoxxvfqPoBUgG-ZVt-GPKLmYMhde9emxBamgKI3R7xY)

**Description**

| No. | หัวข้อ | รายละเอียด | Database |
| --- | --- | --- | --- |
| **1** | **วัตถุประสงค์ (Objective)** | แสดงข้อมูลรายการ Setup RI Commission Rate ทั้งหมดเพิ่ม / ลบ / แก้ไข Setup RI Commission Rate |  |
| **2** | **ผู้ใช้งาน และ สิทธิ์ที่ได้รับ (Target Users and authorization)** | เจ้าหน้าที่ฝ่ายคณิตศาสตร์ |  |
| **3** | **ข้อมูลที่ป้อนเข้าสู่ระบบ** | ข้อมูล Setup RI Commission Rate ของ Treatyประเภทของ Setup RI Commission Rate ของ Treaty นี้ |  |
| **4** | **ข้อมูลที่ได้จากระบบ (Output)** | ข้อมูล Setup RI Commission Rate ของ Treatyประเภทของ Setup RI Commission Rate ของ Treaty นี้ |  |
| **5** | **การกระทำกับหน้าจอ (Actions)** | กดเลือก ประเภทของ Setup RI Commission Rate แสดงตัวเลือกในรูปแบบ Dropdown |  |
| **6** | **อธิบายรายละเอียด (Description)** | การแสดงข้อมูลแบ่งออกเป็น 2 กรณี**กรณีที่ 1** : ยังไม่เคยได้รับการอนุมัติใช้งาน [tx_tmp_treaty](http://wiki.thaisamut.co.th/x/twCaQQ).treaty_code ยังไม่มีข้อมูลอยู่ใน [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).treaty_code **กรณีที่ 2** : เคยได้รับการอนุมัติใช้งานแล้ว [tx_tmp_treaty](http://wiki.thaisamut.co.th/x/twCaQQ).treaty_code มีข้อมูลอยู่ใน [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).treaty_code **Field****Type****แสดงข้อมูลและเงื่อนไขการตรวจสอบข้อมูล****Default****เลือกประเภท RI Commission Rate**Dropdown List**กรณีที่ 1**แสดงข้อมูลเดิมที่มีการบันทึกไว้บังคับกรอก**กรณีที่ 2**แสดงข้อมูลเดิมที่มีการบันทึกไว้ห้ามแก้ไข**กรณีที่ 1**ห้ามแก้ไขต้องลบข้อมูลเดิมในรูปแบบเดิมในตารางข้อมูลทั้งหมดก่อนจึงจะสามารถแก้ไขได้ | **Table สำหรับดึงข้อมูลตัวเลือกมาแสดง**Screen FieldDB TableDB Field ที่แสดงDB Field ที่นำไปบันทึกเงื่อนไข**เลือกประเภท RI Commission Rate**[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ)descriptionlookup_keyLookup Data ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSINRI/cf_lookup_catalog).parent_id = 1000500 **บันทึกจาก Table แสดงตัวเลือกมา****ลงฐานข้อมูล**Screen FieldDB TableDB Field**เลือกประเภท RI Commission Rate**[tx_tmp_commission_rate](http://wiki.thaisamut.co.th/x/6wCaQQ)ms_comm_type |
| **Field** | **Type** | **แสดงข้อมูลและเงื่อนไขการตรวจสอบข้อมูล** | **Default** |
| **เลือกประเภท RI Commission Rate** | Dropdown List | **กรณีที่ 1**แสดงข้อมูลเดิมที่มีการบันทึกไว้บังคับกรอก**กรณีที่ 2**แสดงข้อมูลเดิมที่มีการบันทึกไว้ห้ามแก้ไข | **กรณีที่ 1**ห้ามแก้ไขต้องลบข้อมูลเดิมในรูปแบบเดิมในตารางข้อมูลทั้งหมดก่อนจึงจะสามารถแก้ไขได้ |
| Screen Field | DB Table | DB Field ที่แสดง | DB Field ที่นำไปบันทึก | เงื่อนไข |
| **เลือกประเภท RI Commission Rate** | [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) | description | lookup_key | Lookup Data ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSINRI/cf_lookup_catalog).parent_id = 1000500 |
| Screen Field | DB Table | DB Field |
| **เลือกประเภท RI Commission Rate** | [tx_tmp_commission_rate](http://wiki.thaisamut.co.th/x/6wCaQQ) | ms_comm_type |

**กรณีเลือก ประเภท**

1. [Policy Year](http://wiki.thaisamut.co.th/x/2gECQg)
2. [Policy Term](http://wiki.thaisamut.co.th/x/3QECQg)
3. ไม่กำหนด ให้สามารถบันทึกหน้าจอและระบบพาไปยังหน้า [03-6 แก้ไข Setup RI Premium Rate](http://wiki.thaisamut.co.th/x/4AECQg)
