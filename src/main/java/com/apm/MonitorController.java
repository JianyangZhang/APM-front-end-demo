package com.apm;

//import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import com.fasterxml.jackson.core.JsonParseException;  
import com.fasterxml.jackson.databind.JsonMappingException;  
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Random;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;


@RestController
@RequestMapping("/monitor")
public class MonitorController {
	// @Autowired
 //    TestService testService;

    @RequestMapping(value="/basicinfo/{resId}")
    public @ResponseBody Map<String, Object> basicinfo() {
    	String json = "{\"alias\":\"采集机-1\",\"hostname\":\"gather-5\", \"ipadder\":\"192.168.1.1\", \"os\":\"rhel x86_64\", \"cpu\":\"4*8 Core\", \"mem\":\"128G\",\"disk\":\"500G\", \"uptime\":\"4天3小时\"}";
    	Map<String, Object> result = this.jsonMapper(json);
        return result;
    }

    @RequestMapping("/cpu/{resId}")
    public @ResponseBody Map<String, Object> cpu() {
    	String json = "{ \"%user\":30,\"%sys\":12,\"%iowait\":0,\"%usage\":55,\"%steal\":5}";
    	Map<String, Object> result = this.jsonMapper(json);
    	List<String> timeRange =  this.createTimeRange(12, 48);
    	int[] data = this.createNumRandomList(48, 85, 10); 
    	Map<String, Object> dataset = new HashMap();
    	dataset.put("time", timeRange);
    	dataset.put("data", data);
    	result.put("dataset", dataset);
        return result;
    }

    @RequestMapping("/mem/{resId}")
    public @ResponseBody Map<String, Object> mem() {
    	String json = "{\"gbbuffers\":3.2,\"gbcached\":55,\"%swpused\":0,\"%usage\":32,\"gbswpcad\":2}";
    	Map<String, Object> result = this.jsonMapper(json);
    	List<String> timeRange =  this.createTimeRange(12, 48);
    	int[] data = this.createNumRandomList(48, 85, 10); 
    	Map<String, Object> dataset = new HashMap();
    	dataset.put("time", timeRange);
    	dataset.put("data", data);
    	result.put("dataset", dataset);
        return result;
    }

    @RequestMapping("/filesys/{resId}")
    public @ResponseBody List<Map<String, Object>> filesys() {
    	List<Map<String, Object>> result = new ArrayList();
    	List<String> strList = new ArrayList();
	    strList.add("{\"filesystem\":\"/export\", \"usage\":55}");
		strList.add("{\"filesystem\":\"/\", \"usage\":12}");
		strList.add("{\"filesystem\":\"/tmp\", \"usage\":60}");
		strList.add("{\"filesystem\":\"/test\", \"usage\":5}");
		for (String item : strList) {
			result.add(this.jsonMapper(item));
		}
    	
        return result;
    }

    @RequestMapping("/diskio/{resId}")
    public @ResponseBody Map<String, Object> diskio() {
    	String json = "{\"tps\":20.1,\"rtps\":143.4,\"wtps\":55.4,\"bread/s\":32.2,\"bwrtn/s\":687.8}";
    	Map<String, Object> result = this.jsonMapper(json);
    	List<String> timeRange =  this.createTimeRange(12, 48);
    	int[] data = this.createNumRandomList(48, 150, 30); 
    	Map<String, Object> dataset = new HashMap();
    	dataset.put("time", timeRange);
    	dataset.put("data", data);
    	result.put("dataset", dataset);
        return result;
    }

    @RequestMapping("/networkio/{resId}")
    public @ResponseBody Map<String, Object> networkio() {
    	Map<String, Object> result = new HashMap();
    	List<String> timeRange =  this.createTimeRange(12, 48);
    	int[] rxeth0 = this.createNumRandomList(144, 6000, 30); 
    	int[] txeth0 = this.createNumRandomList(144, 1000, 30); 
    	int[] rxeth1 = this.createNumRandomList(144, 3000, 30); 
    	int[] txeth1 = this.createNumRandomList(144, 3500, 30); 
        int[] rxeth2 = this.createNumRandomList(144, 6000, 30); 
        int[] txeth2 = this.createNumRandomList(144, 1000, 30); 
        int[] rxeth3 = this.createNumRandomList(144, 3000, 30); 
        int[] txeth3 = this.createNumRandomList(144, 3500, 30); 
        int[] rxeth4 = this.createNumRandomList(144, 6000, 30); 
        int[] txeth4 = this.createNumRandomList(144, 1000, 30); 
        int[] rxeth5 = this.createNumRandomList(144, 3000, 30); 
        int[] txeth5 = this.createNumRandomList(144, 3500, 30); 
        int[] rxeth6 = this.createNumRandomList(144, 3000, 30); 
        int[] txeth6 = this.createNumRandomList(144, 3500, 30); 
        int[] rxeth7 = this.createNumRandomList(144, 6000, 30); 
        int[] txeth7 = this.createNumRandomList(144, 1000, 30); 
        int[] rxeth8 = this.createNumRandomList(144, 3000, 30); 
        int[] txeth8 = this.createNumRandomList(144, 3500, 30); 
        int[] rxeth9 = this.createNumRandomList(144, 3000, 30); 
        int[] txeth9 = this.createNumRandomList(144, 3500, 30); 
        int[] rxeth10 = this.createNumRandomList(144, 3000, 30); 
        int[] txeth10 = this.createNumRandomList(144, 3500, 30); 
    	Map<String, Object> dataset = new HashMap();
    	result.put("time", timeRange);
    	result.put("eth0接收", rxeth0);
    	result.put("eth0发送", txeth0);
    	result.put("eth1接收", rxeth1);
    	result.put("eth1发送", txeth1);
        result.put("eth2接收", rxeth2);
        result.put("eth2发送", txeth2);
        result.put("eth3接收", rxeth3);
        result.put("eth3发送", txeth3);
        result.put("eth4接收", rxeth4);
        result.put("eth4发送", txeth4);
        result.put("eth5接收", rxeth5);
        result.put("eth5发送", txeth5);
        result.put("eth6接收", rxeth6);
        result.put("eth6发送", txeth6);
        result.put("eth7接收", rxeth7);
        result.put("eth7发送", txeth7);
        result.put("eth8接收", rxeth8);
        result.put("eth8发送", txeth8);
        result.put("eth9接收", rxeth9);
        result.put("eth9发送", txeth9);
        result.put("eth10接收", rxeth10);
        result.put("eth10发送", txeth10);
        return result;
    }

    @RequestMapping("/process/{resId}")
    public @ResponseBody List<Map<String, Object>> process() {
    	List<Map<String, Object>> result = new ArrayList();
    	List<String> strList = new ArrayList();
	    strList.add("{\"name\":\"FluxManager\", \"cpu\":35, \"mem\":16, \"rss\":13, \"vsz\":45, \"iord\":123.4, \"iowr\":74.5}");
		strList.add("{\"name\":\"Tomcat(Java)\", \"cpu\":12, \"mem\":43, \"rss\":22, \"vsz\":23.3, \"iord\":12.4, \"iowr\":12.5}");
		strList.add("{\"name\":\"MasterControl\", \"cpu\":35, \"mem\":16, \"rss\":13, \"vsz\":45, \"iord\":123.4, \"iowr\":74.5}");
		strList.add("{\"name\":\"ActiveMQ\", \"cpu\":35, \"mem\":16, \"rss\":13, \"vsz\":45, \"iord\":123.4, \"iowr\":74.5}");
		for (String item : strList) {
			result.add(this.jsonMapper(item));
		}
    	
        return result;
    }

    private int[] createNumRandomList(int length, int max, int min) {
    	int[] result = new int[length];

    	for (int i=0; i < length; i++) {
    		Random random = new Random();
        	result[i] = random.nextInt(max)%(max-min+1) + min;
    	}

    	return result;
    }

    private List<String> createTimeRange(int start, int length){
    	int time = 0;
    	int step = 5;
    	int hour = start;
    	List<String> result = new ArrayList();
    	result.add(start + ":" + "00");

    	for (int i=0; i < length; i++) {
    		String strtime = null;
    		if (time == 55) {
		        time = 0;
		        hour += 1;
		    } else {
		        time += step;
		    }

		    if (time < 10) {
		    	strtime = "0" + time;
		    } else {
		    	strtime = "" + time;
		    }
        	result.add(hour + ":" + strtime);	
    	}

    	return result;
    }

    private Map<String, Object> jsonMapper(String json) {
   		Map<String, Object> result = null;
   		boolean isEmpty = (json == null || json.trim().length() == 0);
        if (!isEmpty) {
        	ObjectMapper mapper = new ObjectMapper();
        	try {
        		result = mapper.readValue(json, HashMap.class);
        	} catch (IOException e) {
            	e.printStackTrace();
        	}
        }
   		return result;
   	}

}